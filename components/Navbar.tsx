"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f8f4e4] text-[#FF4A1C] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src='/Logo/Logo.jpg'
            alt='Logo'
            width={50}
            height={50}
            className="rounded"
          />
          <div>
            <span className="text-xl font-bold tracking-wide text-[#FF4A1C] block">AVIATION</span>
            <span className="text-[#0F85BC] text-sm tracking-wider -mt-1 block font-semibold">CONSULTANCY SERVICE</span>
          </div>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#FF4A1C] hover:text-[#0F85BC] transition">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link href="/" className="text-[#FF4A1C] hover:text-[#0F85BC] transition">Home</Link></li>
          <li><Link href="/about" className="text-[#FF4A1C] hover:text-[#0F85BC] transition">About Us</Link></li>
          <li><Link href="/services" className="text-[#FF4A1C] hover:text-[#0F85BC] transition">Services</Link></li>
          <li><Link href="/contactUs" className="text-[#FF4A1C] hover:text-[#0F85BC] transition">Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#f8f4e4] border-t border-[#0F85BC]/20 px-6 pb-4 pt-2 space-y-4 text-lg font-medium">
          <li><Link href="/" onClick={() => setIsOpen(false)} className="text-[#FF4A1C] hover:text-[#0F85BC] transition">Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-[#FF4A1C] hover:text-[#0F85BC] transition">About Us</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)} className="text-[#FF4A1C] hover:text-[#0F85BC] transition">Services</Link></li>
          <li><Link href="/contactUs" onClick={() => setIsOpen(false)} className="text-[#FF4A1C] hover:text-[#0F85BC] transition">Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}