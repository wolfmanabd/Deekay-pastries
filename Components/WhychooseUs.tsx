"use client";

import { motion } from "framer-motion";
import { Coffee, Truck, ShoppingBag, Star } from "lucide-react";

const features = [
  {
    title: "Freshly Baked Daily",
    description: "Made with quality ingredients to ensure the best taste.",
    icon: <Coffee size={48} className="text-[var(--brand-red)] mx-auto mb-4" />,
  },
  {
    title: "Fast Delivery",
    description: "Get your snacks hot and fresh across Ibadan.",
    icon: <Truck size={48} className="text-[var(--brand-red)] mx-auto mb-4" />,
  },
  {
    title: "Bulk Orders",
    description: "Perfect for parties, offices, and special occasions.",
    icon: <ShoppingBag size={48} className="text-[var(--brand-red)] mx-auto mb-4" />,
  },
  {
    title: "Affordable Pricing",
    description: "Premium taste without breaking the bank.",
    icon: <Star size={48} className="text-[var(--brand-red)] mx-auto mb-4" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6"
          style={{ color: "var(--brand-red)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Deeekay Pastries
        </motion.h2>

        <motion.p
          className="text-lg mb-16"
          style={{ color: "var(--text-brown)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We deliver fresh, delicious snacks across Ibadan with care and dedication.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-3xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              {feature.icon}

              {/* Title */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--brand-red)" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm" style={{ color: "var(--text-brown)" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
