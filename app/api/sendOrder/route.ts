import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, address, notes, cartItems } = body;

    if (!name || !email || !phone || !address || !cartItems?.length) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Calculate totals
    const totalQty = cartItems.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    );

    const totalAmount = cartItems.reduce(
      (sum: number, item: any) => sum + item.quantity * item.price,
      0
    );

    // Build table rows
    const rows = cartItems
      .map(
        (item: any) => `
          <tr>
            <td style="padding:8px 0;">${item.name}</td>
            <td style="padding:8px 0; text-align:center;">
              ${item.quantity}
            </td>
            <td style="padding:8px 0; text-align:right;">
              ₦${(item.quantity * item.price).toLocaleString()}
            </td>
          </tr>
        `
      )
      .join("");

    // Email HTML template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width:600px;">
        <h2>🧁 New Order – Deeekay Pastries</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>

        <hr style="margin:20px 0;" />

        <table width="100%" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th align="left" style="border-bottom:2px solid #000; padding-bottom:8px;">
                Product
              </th>
              <th align="center" style="border-bottom:2px solid #000; padding-bottom:8px;">
                Qty
              </th>
              <th align="right" style="border-bottom:2px solid #000; padding-bottom:8px;">
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>

          <tfoot>
            <tr>
              <td style="padding-top:12px; font-weight:bold;">
                Total
              </td>
              <td style="padding-top:12px; text-align:center; font-weight:bold;">
                ${totalQty}
              </td>
              <td style="padding-top:12px; text-align:right; font-weight:bold;">
                ₦${totalAmount.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>

        <hr style="margin:20px 0;" />

        <p style="font-size:13px; color:#555;">
          Order sent from Deeekay Pastries website
        </p>
      </div>
    `;

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Deeekay Pastries <onboarding@resend.dev>",
        to: [process.env.ORDER_EMAIL],
        subject: `New Order from ${name}`,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend Error:", errorText);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Order sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
