"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const snacks = [
  {
    name: "Meat Pie",
    image: "/img/meat-pies.png",
    tag: "Hot & Savory",
    desc: "Golden, flaky crust filled with rich, tasty meat. Perfect for any time of the day.",
  },
  {
    name: "Doughnut",
    image: "/img/doughnuts.png",
    tag: "Soft & Sweet",
    desc: "Soft, fluffy doughnuts with a sweet finish that melts in your mouth.",
  },
  {
    name: "Sausage Roll",
    image: "/img/sausage-rolls.png",
    tag: "Best Seller",
    desc: "Juicy sausage wrapped in buttery pastry. A customer favorite.",
  },
  {
    name: "Egg Buns",
    image: "/img/eggbuns.png",
    tag: "Customer Favorite",
    desc: "Crunchy outside, soft inside, with tasty egg filling.",
  },
  {
    name: "Buns",
    image: "/img/buns.png",
    tag: "Crunchy Delight",
    desc: "Golden, crunchy buns fried to perfection. A classic Nigerian favorite.",
  },
];


export default function SnacksSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl font-extrabold"
            style={{ color: "var(--brand-red)" }}
          >
            Our Popular Snacks
          </h2>

          <p
            className="mt-4 text-lg"
            style={{ color: "var(--text-brown)" }}
          >
            Freshly baked snacks made daily and delivered hot across Ibadan.
            Perfect for breakfast, offices, parties, and everyday cravings.
          </p>
        </motion.div>

        {/* Snack Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {snacks.map((snack, index) => (
            <motion.div
              key={snack.name}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ backgroundColor: "#FFF1E0" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.12 }}
              viewport={{ once: true }}
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={snack.image}
                  alt={snack.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Tag */}
                <span
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold mb-3"
                  style={{
                    backgroundColor: "var(--brand-yellow)",
                    color: "var(--text-brown)",
                  }}
                >
                  {snack.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-extrabold mb-2"
                  style={{ color: "var(--brand-red)" }}
                >
                  {snack.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: "var(--text-brown)" }}
                >
                  {snack.desc}
                </p>

                {/* Badges */}
                <div className="flex gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--brand-cream)] text-[var(--brand-red)] font-semibold">
                    Fresh
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--brand-cream)] text-[var(--brand-red)] font-semibold">
                    Hot
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--brand-cream)] text-[var(--brand-red)] font-semibold">
                    Ibadan
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href="/snacks"
                  className="inline-flex items-center justify-center w-full py-3 rounded-full font-bold transition transform hover:scale-105"
                  style={{
                    backgroundColor: "var(--brand-red)",
                    color: "var(--white)",
                  }}
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
