"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gold-500 tracking-wide">
          AeroConsult
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link href="/" className="hover:text-gold-500 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-gold-500 transition">About Us</Link></li>
          <li><Link href="/services" className="hover:text-gold-500 transition">Services</Link></li>
          <li><Link href="/contact" className="hover:text-gold-500 transition">Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-800 px-6 pb-4 space-y-4 text-lg font-medium">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}
