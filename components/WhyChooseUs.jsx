'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Award } from 'lucide-react';

export default function WhyChooseUsBanner() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const currentElement = document.getElementById('why-choose-us-banner');
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const reasons = [
    "Specialized expertise in advisory services",
    "Dedicated team of professionals committed to your success",
    "Proven track record of delivering results",
    "Personalized approach tailored to your specific requirements",
    "Ongoing support throughout the entire process"
  ];

  return (
    <section 
      id="why-choose-us-banner" 
      className="py-12 bg-gradient-to-r from-slate-800 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 opacity-20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`flex flex-col md:flex-row items-center justify-between transition-all duration-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          {/* Left Side - Title */}
          <div className="md:w-1/3 mb-6 md:mb-0 flex items-center">
            <div className="bg-blue-600 p-3 rounded-full mr-4 hidden md:flex">
              <Award size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us?</h2>
          </div>
          
          {/* Right Side - Reasons */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className={`flex items-start transition-all duration-500 ${
                  isVisible ? `opacity-100 transform translate-x-0 delay-${index * 100}` : 
                  'opacity-0 transform translate-x-10'
                }`}
              >
                <CheckCircle size={22} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-white">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}