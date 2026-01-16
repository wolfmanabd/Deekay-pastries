"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-red)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Image
              src="/img/logo.png"
              alt="Deeekay Pastries"
              width={160}
              height={60}
              className="mb-6"
            />
            <p className="text-white/85 leading-relaxed">
              Deeekay Pastries delivers freshly baked snacks across Ibadan.
              From meat pies to doughnuts, we bake daily and deliver hot.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/90">
              <li>
                <Link href="/" className="hover:text-[var(--brand-yellow)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/snacks" className="hover:text-[var(--brand-yellow)]">
                  Snacks
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--brand-yellow)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--brand-yellow)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Snacks */}
          <div>
            <h4 className="font-extrabold text-lg mb-6">Popular Snacks</h4>
            <ul className="space-y-4 text-white/90">
              <li>Meat Pie</li>
              <li>Sausage Roll</li>
              <li>Doughnuts</li>
              <li>Egg Buns</li>
              <li>Buns</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                Ibadan, Oyo State
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                +234 704 831 1989
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                hello@deeekaypastries.com
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-red)] transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--brand-yellow)] hover:text-[var(--brand-red)] transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Deeekay Pastries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
