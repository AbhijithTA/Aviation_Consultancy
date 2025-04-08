"use client"

import { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  ChevronRight,
  Compass
} from 'lucide-react';

export default function ValuesAndVision() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById('values-vision-section');
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  
  const values = [
    {
      title: "Integrity",
      description: "Ethical compliance solutions tailored to your needs.",
      icon: <Shield size={24} className="text-blue-600" />
    },
    {
      title: "Strategic Foresight",
      description: "Proactive approaches to evolving regulations.",
      icon: <Compass size={24} className="text-blue-600" />
    },
    {
      title: "Confidentiality",
      description: "We uphold strict professional discretion in all engagements.",
      icon: <Lock size={24} className="text-blue-600" />
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority and assistance can reach to your footstep.",
      icon: <Users size={24} className="text-blue-600" />
    }
  ];

  return (
    <section 
      id="values-vision-section"
      className={`py-20 bg-gradient-to-br from-white to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Values Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                Our Professional Values <span className="text-blue-600">&</span> Confidentiality
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 max-w-lg">
                At Padma Consultancy Services, we're committed to upholding the highest standards 
                in regulatory compliance and consultancy. Our core values guide everything we do.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
                <div className="relative bg-blue-700 text-white p-5 rounded-lg transform rotate-3 shadow-lg">
                  <div className="transform -rotate-3">
                    <div className="flex items-center justify-center mb-3">
                      <CheckCircle size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Professional Excellence</h3>
                    <p className="text-blue-100 text-center text-sm">
                      Delivering aviation regulatory expertise with precision and care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible ? `opacity-100 animate-fade-in-${index + 1}` : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 flex items-center justify-center p-10 bg-blue-700">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-4">
                  <Eye className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                <div className="w-16 h-1 bg-white mx-auto"></div>
              </div>
            </div>
            
            <div className="lg:w-2/3 p-8 lg:p-10">
              <div className="flex">
                <ChevronRight className="text-blue-300 flex-shrink-0 mr-2 mt-1" size={20} />
                <p className="text-white text-lg leading-relaxed italic">
                  "To be the leading provider of seamless, cost-effective consultancy solutions, 
                  ensuring compliance, legal access, and social justice. We strive to empower 
                  individuals, small businesses, and underprivileged communities by making 
                  regulatory processes more accessible, transparent, and fair—so you can focus 
                  on growth, not bureaucracy."
                </p>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button className="bg-white hover:bg-blue-50 text-blue-800 font-medium py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md flex items-center">
                  Learn More About Our Approach
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Feature */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-blue-100 px-6 py-3 rounded-full">
            <Shield className="text-blue-700 mr-2" size={20} />
            <span className="text-blue-800 font-medium">Aviation Regulatory Compliance Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
}