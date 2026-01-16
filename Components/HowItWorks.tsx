"use client";

import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Truck } from "lucide-react";

const steps = [
  {
    title: "Choose Your Snacks",
    description:
      "Select from our freshly baked meat pies, doughnuts, sausage rolls, egg buns, buns and more.",
    icon: ShoppingBag,
  },
  {
    title: "Place Your Order",
    description:
      "Order easily via WhatsApp or phone. Tell us what you want, quantity, and delivery location.",
    icon: MessageCircle,
  },
  {
    title: "Fast Delivery",
    description:
      "We prepare your snacks fresh and deliver hot to your location anywhere in Ibadan.",
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl font-extrabold"
            style={{ color: "var(--brand-red)" }}
          >
            How It Works
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--text-brown)" }}
          >
            Ordering delicious snacks from Deeekay Pastries is simple, fast,
            and stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                className="relative rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ backgroundColor: "var(--brand-cream)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6"
                  style={{ backgroundColor: "var(--brand-yellow)" }}
                >
                  <Icon size={32} style={{ color: "var(--brand-red)" }} />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-extrabold mb-4"
                  style={{ color: "var(--brand-red)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-brown)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
