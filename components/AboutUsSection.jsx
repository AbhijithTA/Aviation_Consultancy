"use client";

import { useState, useEffect } from 'react';
import { PlaneTakeoff, Shield, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`bg-gradient-to-br from-sky-50 to-blue-100 py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Welcome to Padma Consultancy Services</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your expert partner in regulatory compliance, governance support, and guidance. 
                Backed by over three decades of government experience, we specialize in helping 
                businesses and individuals navigate complex statutory requirements with confidence and ease.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Led by a retired Officer from the Government of India (Ministry of Labour), 
                our consultancy is built on the pillars of integrity, innovation, and expertise. 
                We ensure that compliance is not a burden but a seamless process, empowering you 
                to focus on your core activities while we handle the complexities.
              </p>
            </div>
            
            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Shield className="text-blue-700" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Integrity</h4>
                <p className="text-gray-600 text-sm">Transparent and ethical practices in all consultations</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Award className="text-blue-700" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Expertise</h4>
                <p className="text-gray-600 text-sm">Drawing from decades of government experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Users className="text-blue-700" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Modern solutions to complex compliance challenges</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image and CTA */}
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="bg-blue-800 absolute -top-2 -left-2 w-full h-full rounded-lg"></div>
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-700 p-6 text-white">
                  <div className="flex items-center justify-center mb-4">
                    <PlaneTakeoff size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Aviation Compliance Experts</h3>
                  <p className="text-blue-100 text-center text-sm mb-4">Navigating regulatory skies with precision</p>
                </div>
                
                <div className="p-6">
                  <img 
                    src="/images/AboutUs.jpg" 
                    alt="Aviation consultancy team" 
                    className="rounded-lg shadow-md mb-6 w-full"
                  />
                  <div className="flex justify-center">
                  <Link href="/contactUs">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
                      Contact Our Team
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Aviation Specific Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-full text-sm">
            <PlaneTakeoff size={16} className="mr-2" />
            <span>Specializing in Aviation Regulatory Compliance</span>
          </div>
        </div>
      </div>
    </section>
  );
}