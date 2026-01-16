"use client";

import { useState } from "react";
import { useCart } from "@/Components/Cartcontext";
import Modal from "@/Components/Modal";

export default function Checkout() {
    const { cart, clearCart } = useCart();
    const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", notes: "" });
    const [loading, setLoading] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/sendOrder", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    address: form.address,
                    notes: form.notes,
                    cartItems: cart,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to send order");
            }

            setShowThankYou(true);
            clearCart();
        } catch (error: any) {
            console.error("Checkout Error:", error.message);
            alert(`Failed to place order: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="max-w-3xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold mb-8 text-[var(--brand-red)]">Checkout</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300"
                />
                <input
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300"
                />
                <input
                    name="address"
                    placeholder="Delivery Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300"
                />
                <textarea
                    name="notes"
                    placeholder="Additional Notes"
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[var(--brand-red)] text-white font-bold rounded-full hover:bg-red-700 transition"
                >
                    {loading ? "Placing Order..." : "Place Order"}
                </button>
            </form>

            {showThankYou && (
                <Modal onClose={() => setShowThankYou(false)}>
                    <div className="text-center p-8">
                        <h2 className="text-3xl font-bold text-[var(--brand-red)] mb-4">Thank You!</h2>
                        <p>Your order has been placed successfully. 🎉</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}
