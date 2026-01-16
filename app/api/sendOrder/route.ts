import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      address,
      notes,
      cartItems,
    } = body;

    // ✅ Server-side validation
    if (!name || !email || !phone || !address) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { message: "Cart is empty" },
        { status: 400 }
      );
    }

    // ✅ Format order table
    const rows = cartItems
      .map(
        (item: CartItem) => `
        <tr>
          <td style="padding:8px;border:1px solid #ddd;">${item.name}</td>
          <td style="padding:8px;border:1px solid #ddd;text-align:center;">${item.quantity}</td>
          <td style="padding:8px;border:1px solid #ddd;">₦${(
            item.price * item.quantity
          ).toLocaleString()}</td>
        </tr>
      `
      )
      .join("");

    const totalQty = cartItems.reduce((s: number, i: CartItem) => s + i.quantity, 0);
    const totalAmount = cartItems.reduce(
      (s: number, i: CartItem) => s + i.price * i.quantity,
      0
    );

    const html = `
      <div style="font-family:Arial,sans-serif">
        <h2>🛒 New Order – DeeKay Pastries</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>

        <table style="border-collapse:collapse;width:100%;margin-top:16px">
          <thead>
            <tr>
              <th style="padding:8px;border:1px solid #ddd;">Product</th>
              <th style="padding:8px;border:1px solid #ddd;">Qty</th>
              <th style="padding:8px;border:1px solid #ddd;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
            <tr>
              <td style="padding:8px;border:1px solid #ddd;"><strong>Total</strong></td>
              <td style="padding:8px;border:1px solid #ddd;text-align:center;"><strong>${totalQty}</strong></td>
              <td style="padding:8px;border:1px solid #ddd;"><strong>₦${totalAmount.toLocaleString()}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DeeKay Pastries <onboarding@resend.dev>",
        to: process.env.ORDER_EMAIL,
        subject: `New Order from ${name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("Resend Error:", err);
      throw new Error("Email failed");
    }

    return NextResponse.json({ message: "Order sent successfully" });
  } catch (error) {
    console.error("Order API Error:", error);
    return NextResponse.json(
      { message: "Failed to send order" },
      { status: 500 }
    );
  }
}
