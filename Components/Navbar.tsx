"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/Components/Cartcontext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="w-full transition-all duration-300"
        style={{
          backgroundColor: "var(--brand-yellow)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.18)" : "none",
        }}
      >
        {/* INNER */}
        <div className="max-w-7xl mx-auto px-6 h-[84px] flex items-center justify-between">
          
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
            {["Home", "Snacks", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-[var(--brand-red)]"
                  style={{ color: "var(--text-brown)" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            {/* CART */}
            <Link href="/cart" className="relative">
              <ShoppingCart
                size={26}
                className="text-[var(--text-brown)] hover:text-[var(--brand-red)]"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--brand-red)] text-white text-xs font-bold rounded-full px-2">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* CTA */}
            <Link
              href="/snacks"
              className="px-6 py-3 rounded-full font-bold transition"
              style={{
                backgroundColor: "var(--brand-red)",
                color: "#fff",
              }}
            >
              Order Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
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
            {["Snacks", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block font-medium"
                style={{ color: "var(--text-brown)" }}
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* MOBILE CART */}
            <Link
              href="/cart"
              className="flex items-center gap-3 font-bold"
              style={{ color: "var(--brand-red)" }}
              onClick={() => setOpen(false)}
            >
              <ShoppingCart size={22} />
              Cart ({totalItems})
            </Link>

            {/* MOBILE CTA */}
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
