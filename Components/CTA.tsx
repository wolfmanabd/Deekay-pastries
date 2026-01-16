"use client";

import Link from "next/link";
import { Phone, ShoppingBag } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-[var(--brand-cream)]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--brand-red)]">
          Ready to Enjoy Fresh Snacks?
        </h2>

        <p className="mt-4 text-lg text-[var(--text-brown)] max-w-2xl mx-auto">
          Order freshly baked meat pies, doughnuts, sausage rolls, egg buns and
          more delivered hot anywhere in Ibadan.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {/* Order Button */}
          <Link
            href="/snacks"
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-full font-bold
              bg-[var(--brand-red)]
              text-white
              transition transform hover:scale-105
            "
          >
            <ShoppingBag size={20} />
            Order Now
          </Link>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2347048311989"
            target="_blank"
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-full font-bold
              border-2 border-[var(--brand-red)]
              text-[var(--brand-red)]
              transition hover:bg-[var(--brand-red)] hover:text-white
            "
          >
            <Phone size={20} />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
