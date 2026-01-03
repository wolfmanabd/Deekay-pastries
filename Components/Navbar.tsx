"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* NAVBAR BAR */}
      <nav
        className="w-full transition-all duration-300"
        style={{
          backgroundColor: "var(--brand-yellow)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.18)" : "none",
        }}
      >
        {/* INNER CONTAINER */}
        <div
          className="
            max-w-7xl mx-auto px-6
            h-[84px]
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[160px] h-[70px]">
              <Image
                src="/img/logo.png"
                alt="Deeekay Pastries logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-10 font-medium">
            <li>
              <Link
                href="/snacks"
                className="hover:text-[var(--brand-red)]"
                style={{ color: "var(--text-brown)" }}
              >
                Snacks
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[var(--brand-red)]"
                style={{ color: "var(--text-brown)" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--brand-red)]"
                style={{ color: "var(--text-brown)" }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <Link
            href="/snacks"
            className="hidden md:inline-flex px-6 py-3 rounded-full font-bold transition"
            style={{
              backgroundColor: "var(--brand-red)",
              color: "#fff",
            }}
          >
            Order Now
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[var(--text-brown)]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="md:hidden px-6 pb-6 space-y-5"
            style={{ backgroundColor: "var(--brand-yellow)" }}
          >
            <Link
              href="/snacks"
              className="block font-medium"
              style={{ color: "var(--text-brown)" }}
              onClick={() => setOpen(false)}
            >
              Snacks
            </Link>
            <Link
              href="/about"
              className="block font-medium"
              style={{ color: "var(--text-brown)" }}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block font-medium"
              style={{ color: "var(--text-brown)" }}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/snacks"
              className="inline-flex w-full justify-center py-3 rounded-full font-bold"
              style={{
                backgroundColor: "var(--brand-red)",
                color: "#fff",
              }}
              onClick={() => setOpen(false)}
            >
              Order Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
