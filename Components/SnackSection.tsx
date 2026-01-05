"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const snacks = [
  { name: "Meat Pie", image: "/img/meat-pies.png", tag: "Hot & Savory" },
  { name: "Doughnut", image: "/img/doughnuts.png", tag: "Soft & Sweet" },
  { name: "Sausage Roll", image: "/img/sausage-rolls.png", tag: "Best Seller" },
  { name: "Egg Buns", image: "/img/eggbuns.png", tag: "Customer Favorite" },
];

export default function SnacksSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--brand-cream)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: "var(--brand-red)" }}>
            Our Popular Snacks
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--text-brown)" }}>
            Freshly baked snacks made daily and delivered hot across Ibadan.
          </p>
        </motion.div>

        {/* Snack Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {snacks.map((snack, index) => (
            <motion.div
              key={snack.name}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              {/* Snack Image with Floating Effect */}
              <motion.div
                className="relative h-56 overflow-hidden"
                animate={{ y: ["0%", "-3%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={snack.image}
                  alt={snack.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Snack Info */}
              <div className="p-6">
                <span
                  className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
                  style={{ backgroundColor: "var(--brand-yellow)", color: "var(--text-brown)" }}
                >
                  {snack.tag}
                </span>

                <h3 className="text-xl font-extrabold mb-4" style={{ color: "var(--brand-red)" }}>
                  {snack.name}
                </h3>

                <Link
                  href="/snacks"
                  className="inline-flex items-center justify-center w-full py-3 rounded-full font-bold transition transform hover:scale-105"
                  style={{ backgroundColor: "var(--brand-red)", color: "var(--white)" }}
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
