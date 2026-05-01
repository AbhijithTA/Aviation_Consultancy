"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
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

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormStatus({ submitted: true, error: false });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setFormStatus({ submitted: false, error: false });
    }, 5000);
  };

  return (
    <>
      <NavbarComponent />
      <div className="pt-10 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-sky-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
            <p className="text-xl text-center text-sky-100">
              For professional advisory in aviation regulatory compliance and
              legal matters.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-sky-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <h3 className="font-medium text-gray-900">
                    Adv. Sasidharan C P Nair
                  </h3>
                  <p className="text-gray-600">Advocate</p>
                  <p className="text-gray-600 text-sm">
                    Aviation Regulatory & Security Compliance Consultant
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="text-amber-500 mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 8800171269</p>
                    <p className="text-gray-600">+91 8156828115</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-amber-500 mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">sasidharann277@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <MapPin className="text-amber-500 mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Puthen Puthusseri Building, Door No. 11/631
                      <br />
                      Opposite Airport Cargo Gate
                      <br />
                      Cochin International Airport Limited (Airport Old Road)
                      <br />
                      Nedumbasseri, Cochin – 683111, Kerala
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <Clock className="text-amber-500 mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 3:00 PM - 5:00 PM
                    </p>
                    <p className="text-gray-600">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-sky-800 mb-6">
                Send Us a Message
              </h2>

              {formStatus.submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <strong>Message received.</strong>
                  <p>We will respond at the earliest.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                />

                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 text-white bg-sky-700 hover:bg-sky-800 rounded-md"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
