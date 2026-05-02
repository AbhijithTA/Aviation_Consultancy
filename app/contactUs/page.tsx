"use client";

import { useState } from "react";
import NavbarComponent from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    color: "#374151",
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: "12px",
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #d1d5db",
    outline: "none",
    color: "#374151",
    backgroundColor: "#fff",
  };

  return (
    <>
      <NavbarComponent />

      <main className="w-full bg-white min-h-screen pt-16">
        <div className="container mx-auto px-6 py-14 md:py-20 max-w-4xl">
          {/* Page Heading */}
          <h1
            className="text-slate-800 leading-snug mb-4 mt-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Contact
          </h1>

          {/* Sub-heading */}
          <h2
            className="text-slate-700 mb-8"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            For professional advisory in aviation regulatory compliance and
            legal matters.
          </h2>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2
                className="text-slate-800 mb-6"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Contact Information
              </h2>

              <div className="space-y-5">
                {/* Name & Title */}
                <div>
                  <p
                    className="text-slate-800"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Adv. Sasidharan C P
                  </p>
                  <p
                    className="text-slate-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    Advocate
                  </p>
                  <p
                    className="text-slate-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    Aviation Regulatory &amp; Compliance Advisory
                  </p>
                </div>

                <div className="border-t border-gray-100" />

                {/* Phone */}
                <div>
                  <p
                    className="text-slate-800 mb-1"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Phone
                  </p>
                  <p
                    className="text-slate-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    +91 8800171269
                  </p>
                  <p
                    className="text-slate-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    +91 8156828115
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p
                    className="text-slate-800 mb-1"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Email
                  </p>
                  <p
                    className="text-slate-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    sasidharann277@gmail.com
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p
                    className="text-slate-800 mb-1"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Address
                  </p>
                  <p
                    className="text-slate-600 leading-relaxed"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    Puthen Puthusseri Building, Door No. 11/631
                    <br />
                    Opposite Airport Cargo Gate
                    <br />
                    Cochin International Airport Limited (Airport Old Road)
                    <br />
                    Nedumbasseri, Cochin – 683111, Kerala
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <p
                    className="text-slate-800 mb-1"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Hours
                  </p>
                  <p
                    className="text-slate-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    Monday – Friday: 3:00 PM – 5:00 PM
                  </p>
                  <p
                    className="text-slate-600"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    Saturday &amp; Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className="text-slate-800 mb-6"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Send a Message
              </h2>

              {submitted && (
                <div
                  className="border border-gray-300 bg-gray-50 px-4 py-3 mb-6"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "12px",
                    color: "#374151",
                  }}
                >
                  Your message has been received. We will respond at the
                  earliest.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1" style={labelStyle}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block mb-1" style={labelStyle}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block mb-1" style={labelStyle}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block mb-1" style={labelStyle}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block mb-1" style={labelStyle}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors px-5 py-2"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "12px" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
