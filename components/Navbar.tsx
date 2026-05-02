"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#aboutUs" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contactUs" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo/Logo2.png"
            alt="Logo"
            width={44}
            height={44}
            className="rounded"
          />
          <div>
            <span
              className="block text-slate-800"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "13px",
                fontWeight: "bold",
                lineHeight: "1.3",
              }}
            >
              Aviation Regulatory &amp; Compliance Advisory
            </span>
            <span
              className="block text-slate-500"
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "11px",
                lineHeight: "1.3",
              }}
            >
              Adv. Sasidharan C P
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle — text only, no icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
          aria-label="Toggle menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
