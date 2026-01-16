"use client";

import Image from "next/image";
import { useCart } from "@/Components/Cartcontext";
import Link from "next/link";

interface CartItem {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

function handleCheckout(cart: CartItem[], total: number, clearCart: () => void) {
    const message = cart
        .map(
            (i) =>
                `${i.name} x${i.quantity} = ₦${i.price * i.quantity}`
        )
        .join("\n");

    const body = `
New Order from Deeekay Pastries

Items:
${message}

Total: ₦${total}
`;

    window.location.href = `mailto:wolfmanabd@gmail.com?subject=New Snack Order&body=${encodeURIComponent(
        body
    )}`;

    clearCart();
}


export default function CartPage() {
    const { cart, removeFromCart, updateQty, clearCart } = useCart();

    const total = cart.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
    );

    return (
        <section className="py-32 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-[var(--brand-red)] mb-10">
                    Your Cart
                </h1>

                {cart.length === 0 ? (
                    <p className="text-lg">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-6 bg-[var(--brand-cream)] p-6 rounded-2xl"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="rounded-xl object-cover"
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-bold text-[var(--brand-red)]">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm">₦{item.price}</p>

                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() =>
                                                    updateQty(item.id, item.quantity - 1)
                                                }
                                                className="px-3 py-1 bg-white rounded"
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    updateQty(item.id, item.quantity + 1)
                                                }
                                                className="px-3 py-1 bg-white rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-600 font-bold"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="mt-12 bg-[var(--brand-yellow)] p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-[var(--brand-red)]">
                                Order Summary
                            </h3>
                            <p className="mt-4 text-lg">
                                Total: <strong>₦{total.toLocaleString()}</strong>
                            </p>

                            <Link
                                href="/checkout"
                                className="mt-6 w-full py-4 bg-[var(--brand-red)] text-white font-bold rounded-full text-center inline-block"
                            >
                                Checkout & Place Order
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

