"use client";

import { useState } from "react";
import { useCart } from "@/Components/Cartcontext";
import Modal from "@/Components/Modal";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          ...form,
          cartItems: cart,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      clearCart();
      setShowThankYou(true);
    } catch (err: any) {
      alert(`Failed to place order: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-[var(--brand-red)]">
        Checkout
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {["name", "email", "phone", "address"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
            value={(form as any)[field]}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
        ))}

        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-[var(--brand-red)] text-white font-bold rounded-full"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      {showThankYou && (
        <Modal onClose={() => setShowThankYou(false)}>
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-[var(--brand-red)] mb-4">
              Thank You 🎉
            </h2>
            <p>Your order has been received. We’ll contact you shortly.</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
