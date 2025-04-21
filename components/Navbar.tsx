"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f8f4e4] text-[#FF4A1C] shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src='/Logo/Logo2.png'
            alt='Logo'
            width={50}
            height={50}
            className="rounded"
          />
          <div>
            <span className="text-xl font-bold tracking-wide text-gray-800 block">AVIATION</span>
            <span className="text-blue-600 text-sm tracking-wider -mt-1 block font-semibold">CONSULTANCY SERVICE</span>
          </div>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-blue-600 transition">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link href="/" className="text-gray-800 hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="#aboutUs" className="text-gray-800 hover:text-blue-600 transition">About Us</Link></li>
          <li><Link href="/services" className="text-gray-800 hover:text-blue-600 transition">Services</Link></li>
          <li><Link href="/contactUs" className="text-gray-800 hover:text-blue-600 transition">Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 pt-2 space-y-4 text-lg font-medium">
          <li><Link href="/" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600 transition">About Us</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600 transition">Services</Link></li>
          <li><Link href="/contactUs" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600 transition">Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}