'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Globe, 
  Users, 
  Briefcase, 
  ChevronDown,
  Plane,
  FileCheck,
  MonitorSmartphone,
  ScrollText,
  Scale,
  GraduationCap,
  PenTool
} from 'lucide-react';

export default function ServicesComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById('services-section');
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Regulatory Compliance & Civil Aviation Advisory",
      icon: <ShieldCheck size={28} />,
      description: "Comprehensive compliance management and advisory services for civil aviation regulations.",
      color: "from-indigo-600 to-indigo-800",
      items: [
        { text: "Compliance management for Civil Aviation Security Regulations", icon: <Plane size={16} /> },
        { text: "General business advisory", icon: <Briefcase size={16} /> },
        { text: "Process and support for enforcement orders & compliance checks", icon: <FileCheck size={16} /> },
        { text: "Record maintenance & documentation guidance", icon: <FileText size={16} /> },
        { text: "Preparing documentation for official submissions", icon: <ScrollText size={16} /> },
        { text: "Assisting in structured document preparation", icon: <FileText size={16} /> },
        { text: "Compiling regulatory paperwork", icon: <FileCheck size={16} /> },
        { text: "Developing formal representations", icon: <PenTool size={16} /> },
        { text: "Supporting procedural documentation", icon: <ScrollText size={16} /> },
        { text: "Translation services: Malayalam, English, Hindi", icon: <Globe size={16} /> },
        { text: "E-filing & support in mandatory regulatory compliance", icon: <MonitorSmartphone size={16} /> }
      ]
    },
    {
      id: 2,
      title: "E-Governance & Digital Empowerment",
      icon: <MonitorSmartphone size={28} />,
      description: "Digital solutions and support services for accessing government schemes and empowering communities.",
      color: "from-blue-700 to-blue-900",
      items: [
        { text: "Assistance in access to government schemes, documentation & applications", icon: <FileText size={16} /> },
        { text: "Skill development & vocational training", icon: <GraduationCap size={16} /> },
        { text: "Digital services for rural empowerment (internet access, IT support)", icon: <Globe size={16} /> },
        { text: "Support for public welfare laws & statutory benefits", icon: <Scale size={16} /> },
        { text: "Filing of complaints with regulatory bodies (NC Commission, ST Commission, etc.)", icon: <FileCheck size={16} /> }
      ]
    },
    {
      id: 3,
      title: "Advisory & Support Services",
      icon: <Users size={28} />,
      description: "Expert guidance and advocacy for information access, dispute resolution, and social justice.",
      color: "from-slate-700 to-slate-900",
      items: [
        { text: "Assistance in Information Access Requests (RTI applications & consumer protection processes)", icon: <FileText size={16} /> },
        { text: "Facilitation of Dispute Resolution Processes (guidance on mediation & ADR mechanisms)", icon: <Scale size={16} /> },
        { text: "Regulatory & Compliance Support (property documentation, procedural filings)", icon: <ShieldCheck size={16} /> },
        { text: "Conflict Resolution Guidance (ADR awareness & coordination support)", icon: <Users size={16} /> },
        { text: "Social Justice & Human Rights Advocacy", icon: <Scale size={16} /> },
        { text: "Public Awareness & Rights Education (informational sessions, training programs)", icon: <GraduationCap size={16} /> },
        { text: "Specialized Partner Services in Rural Finance & Mobility Solutions", icon: <Briefcase size={16} /> }
      ]
    }
  ];

  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <section 
      id="services-section" 
      className={`py-20 bg-gradient-to-b from-slate-100 to-slate-200 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 inline-block relative mb-4">
            Our Services
            <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Padma Consultancy Services offers comprehensive solutions tailored to meet your regulatory 
            and compliance needs across aviation and beyond.
          </p>
        </div>

        {/* Services Tabs - Desktop View */}
        <div className="hidden lg:flex mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-4 px-6 text-center transition-all duration-300 ${
                activeTab === index 
                  ? `bg-gradient-to-r ${service.color} text-white` 
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <div className={`mb-2 ${activeTab === index ? 'text-white' : 'text-indigo-600'}`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-sm">{service.title}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Active Service Content - Desktop */}
        <div className="hidden lg:block">
          <div 
            className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-start mb-6">
              <div className={`p-3 rounded-lg mr-4 bg-gradient-to-r ${services[activeTab].color} text-white`}>
                {services[activeTab].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{services[activeTab].title}</h3>
                <p className="text-slate-600">{services[activeTab].description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8">
              {services[activeTab].items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start py-2"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-indigo-600 mr-3 mt-1">{item.icon}</div>
                  <p className="text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Accordion */}
        <div className="lg:hidden space-y-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleService(service.id)}
                className={`w-full p-4 flex items-center justify-between text-left ${
                  expandedService === service.id ? `bg-gradient-to-r ${service.color} text-white` : 'bg-white text-slate-800'
                }`}
              >
                <div className="flex items-center">
                  <div className={expandedService === service.id ? 'text-white' : 'text-indigo-600'}>
                    {service.icon}
                  </div>
                  <h3 className="ml-3 font-semibold">{service.title}</h3>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedService === service.id ? 'max-h-screen py-4 px-6' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="space-y-3">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="text-indigo-600 mr-3 mt-1">{item.icon}</div>
                      <p className="text-slate-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-16 text-center">
          <div 
            className={`inline-block transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white py-4 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
              <Briefcase size={20} className="mr-2" />
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}