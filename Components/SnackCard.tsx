"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./Cartcontext";

type Snack = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function SnackCard(snack: Snack) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-[var(--brand-cream)] rounded-3xl shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-64">
        <Image
          src={snack.image}
          alt={snack.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-[var(--brand-red)]">
          {snack.name}
        </h3>

        <p className="mt-3 text-sm text-[var(--brand-red)]/80 leading-relaxed">
          {snack.description}
        </p>

        <p className="mt-4 text-lg font-bold text-[var(--brand-red)]">
          ₦{snack.price.toLocaleString()}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-10 rounded-full bg-white font-bold"
          >
            −
          </button>
          <span className="font-bold">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-10 rounded-full bg-white font-bold"
          >
            +
          </button>
        </div>

        {/* Add to cart */}
        <button
          onClick={() =>
            addToCart({
              id: snack.id,
              name: snack.name,
              price: snack.price,
              image: snack.image,
              quantity: qty,
            })
          }
          className="w-full mt-6 py-3 rounded-full bg-[var(--brand-red)] text-white font-bold hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-red)] transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
