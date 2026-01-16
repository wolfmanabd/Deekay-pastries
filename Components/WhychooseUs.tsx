"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Truck,
  ShoppingBag,
  Star,
  ShieldCheck,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Freshly Baked Daily",
    description:
      "Our snacks are baked fresh every morning using quality ingredients.",
    extras: ["No preservatives", "Always fresh", "Premium ingredients"],
    icon: <Coffee size={32} />,
  },
  {
    title: "Fast Delivery in Ibadan",
    description:
      "We deliver hot snacks quickly across Ibadan and nearby areas.",
    extras: ["Same-day delivery", "Reliable riders", "Careful packaging"],
    icon: <Truck size={32} />,
  },
  {
    title: "Bulk & Event Orders",
    description:
      "Perfect for weddings, birthdays, offices, and special events.",
    extras: ["Flexible quantities", "On-time delivery", "Discounts available"],
    icon: <ShoppingBag size={32} />,
  },
  {
    title: "Trusted by Customers",
    description:
      "Hundreds of happy customers trust Deeekay Pastries every week.",
    extras: ["5-star reviews", "Repeat customers", "Quality guarantee"],
    icon: <Star size={32} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 relative"
      style={{ backgroundColor: "var(--brand-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold"
          style={{ color: "var(--brand-red)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Why Choose Deeekay Pastries
        </motion.h2>

        <motion.p
          className="mt-4 text-lg max-w-3xl mx-auto"
          style={{ color: "var(--text-brown)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We don’t just sell snacks — we deliver freshness, quality, and
          happiness to homes, offices, and events across Ibadan.
        </motion.p>

        {/* Feature Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div
                className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--brand-yellow)" }}
              >
                <span style={{ color: "var(--brand-red)" }}>{item.icon}</span>
              </div>

              <h3
                className="text-xl font-extrabold mb-3"
                style={{ color: "var(--brand-red)" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm mb-4"
                style={{ color: "var(--text-brown)" }}
              >
                {item.description}
              </p>

              {/* Extras */}
              <ul className="space-y-2 text-sm">
                {item.extras.map((extra) => (
                  <li
                    key={extra}
                    className="flex items-center gap-2"
                    style={{ color: "var(--text-brown)" }}
                  >
                    <ShieldCheck
                      size={16}
                      style={{ color: "var(--brand-red)" }}
                    />
                    {extra}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 inline-flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-4 text-lg font-medium"
            style={{ color: "var(--text-brown)" }}
          >
            Ready to enjoy freshly baked snacks?
          </p>

          <a
            href="/snacks"
            className="px-10 py-4 rounded-full font-bold transition transform hover:scale-105"
            style={{
              backgroundColor: "var(--brand-red)",
              color: "var(--white)",
            }}
          >
            Order Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}