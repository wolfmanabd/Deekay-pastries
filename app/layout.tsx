import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Deekay Pastries | Snack Delivery in Ibadan",
    template: "%s | Deeekay Pastries",
  },
  description:
    "Deekay Pastries offers fast and affordable snack delivery in Ibadan. Order meat pie, chin-chin, buns, cupcakes, and more with doorstep delivery.",
  keywords: [
    "Snack delivery in Ibadan",
    "Pastries in Ibadan",
    "Order snacks online Ibadan",
    "Meat pie delivery Ibadan",
    "Deeekay Pastries",
  ],
  authors: [{ name: "Deeekay Pastries" }],
  openGraph: {
    title: "Deeekay Pastries | Snack Delivery in Ibadan",
    description:
      "Order fresh snacks online in Ibadan from Deeekay Pastries. Fast delivery, quality pastries.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
