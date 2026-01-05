"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-[84px]"
      style={{ backgroundColor: "var(--brand-red)" }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.8,
          ease: "easeOut",
        }}
      >
        <Image
          src="/img/hero.png"
          alt="Fresh snacks from Deeekay Pastries"
          fill
          priority
          className="object-cover"
        />

        {/* Softer Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(196,22,28,0.55) 0%, rgba(196,22,28,0.45) 40%, rgba(196,22,28,0.25) 100%)",
          }}
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.4,
            },
          },
        }}
      >
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <motion.span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-6"
            style={{
              backgroundColor: "var(--brand-yellow)",
              color: "var(--text-brown)",
            }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
          >
            Snack Delivery in Ibadan
          </motion.span>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            variants={{
              hidden: { opacity: 0, y: 36 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.1, ease: "easeOut" },
              },
            }}
          >
            Fresh & Delicious Snacks,
            <span style={{ color: "var(--brand-yellow)" }}>
              {" "}
              Delivered Fast
            </span>
          </motion.h1>

          {/* Text */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-white/90"
            variants={{
              hidden: { opacity: 0, y: 36 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.1, ease: "easeOut" },
              },
            }}
          >
            Enjoy hot meat pies, doughnuts, sausage rolls, egg buns, buns and
            more from <strong>Deeekay Pastries</strong>. Perfect for parties,
            offices, and everyday cravings.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex gap-5 flex-wrap"
            variants={{
              hidden: { opacity: 0, y: 36 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.1, ease: "easeOut" },
              },
            }}
          >
            <Link href="/snacks" className="btn-primary">
              Order Now
            </Link>

            <Link href="/contact" className="btn-outline">
              Bulk Orders
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
