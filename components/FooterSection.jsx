"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  PlaneTakeoff,
} from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="w-full bg-slate-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 48"
          className="w-full h-12 fill-slate-900 transform rotate-180"
        >
          <path d="M0,0L48,8C96,16,192,32,288,32C384,32,480,16,576,16C672,16,768,32,864,32C960,32,1056,16,1152,16C1248,16,1344,32,1392,40L1440,48L1440,48L1392,48C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48L0,48Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-600 rounded-lg mr-3">
                <PlaneTakeoff size={24} />
              </div>
              <h3 className="text-2xl font-bold">
                Aviation Regulatory & Compliance Advisory
              </h3>
            </div>
            <p className="text-slate-300 mb-6">
              Professional advisory services in aviation regulatory compliance,
              security frameworks, and administrative law with a structured and
              preventive approach.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Legal & Litigation Support",
                "Regulatory Advisory & Compliance",
                "Documentation & Preparedness",
                "Enforcement Support",
                "Compliance & Risk Assessment",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-3 mt-1" />
                <span className="text-slate-300">
                  Puthen Puthusseri Building, Door No. 11/631
                  <br />
                  Opposite Airport Cargo Gate
                  <br />
                  Cochin International Airport Limited (Airport Old Road)
                  <br />
                  Nedumbasseri, Cochin – 683111, Kerala
                </span>
              </li>

              <li className="flex items-center">
                <Phone size={18} className="text-blue-400 mr-3" />
                <span className="text-slate-300">
                  +91 8800171269 / +91 8156828115
                </span>
              </li>

              <li className="flex items-center">
                <Mail size={18} className="text-blue-400 mr-3" />
                <span className="text-slate-300">sasidharann277@gmail.com</span>
              </li>

              <li className="flex items-start">
                <Clock size={18} className="text-blue-400 mr-3 mt-1" />
                <span className="text-slate-300">
                  Monday - Friday: 3:00 PM - 5:00 PM
                  <br />
                  Saturday & Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Aviation Regulatory & Compliance Advisory. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
