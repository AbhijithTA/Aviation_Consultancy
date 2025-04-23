"use client";

import NavbarComponent from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Globe,
  Users,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Plane,
  FileCheck,
  MonitorSmartphone,
  ScrollText,
  Scale,
  GraduationCap,
  PenTool,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("regulatory");
  const [visibleSections, setVisibleSections] = useState<{
    [key: string]: boolean;
  }>({});

  type SectionRefs = {
    hero: React.RefObject<HTMLDivElement | null>;
    overview: React.RefObject<HTMLDivElement | null>;
    regulatory: React.RefObject<HTMLDivElement | null>;
    governance: React.RefObject<HTMLDivElement | null>;
    advisory: React.RefObject<HTMLDivElement | null>;
    process: React.RefObject<HTMLDivElement | null>;
    testimonials: React.RefObject<HTMLDivElement | null>;
    contact: React.RefObject<HTMLDivElement | null>;
  };

  const sectionRefs: SectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    overview: useRef<HTMLDivElement>(null),
    regulatory: useRef<HTMLDivElement>(null),
    governance: useRef<HTMLDivElement>(null),
    advisory: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "-100px 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));

          if (
            entry.target.id !== "hero" &&
            entry.target.id !== "overview" &&
            entry.target.id !== "process" &&
            entry.target.id !== "testimonials" &&
            entry.target.id !== "contact"
          ) {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const services: Array<{
    id: keyof SectionRefs;
    title: string;
    icon: React.ReactNode;
    description: string;
    color: string;
    bgImage: string;
    items: Array<{ text: string; icon: React.ReactNode }>;
  }> = [
    {
      id: "regulatory",
      title: "Regulatory Compliance & Civil Aviation Advisory",
      icon: <ShieldCheck size={32} />,
      description:
        "Comprehensive compliance management and advisory services for civil aviation regulations, ensuring your operations meet all legal requirements and industry standards.",
      color: "from-indigo-600 to-indigo-800",
      bgImage: "/images/aviation-bg.jpg",
      items: [
        {
          text: "Compliance management for Civil Aviation Security Regulations",
          icon: <Plane size={18} />,
        },
        { text: "General business advisory", icon: <Briefcase size={18} /> },
        {
          text: "Process and support for enforcement orders & compliance checks",
          icon: <FileCheck size={18} />,
        },
        {
          text: "Record maintenance & documentation guidance",
          icon: <FileText size={18} />,
        },
        {
          text: "Preparing documentation for official submissions",
          icon: <ScrollText size={18} />,
        },
        {
          text: "Assisting in structured document preparation",
          icon: <FileText size={18} />,
        },
        {
          text: "Compiling regulatory paperwork",
          icon: <FileCheck size={18} />,
        },
        {
          text: "Developing formal representations",
          icon: <PenTool size={18} />,
        },
        {
          text: "Supporting procedural documentation",
          icon: <ScrollText size={18} />,
        },
        {
          text: "Translation services: Malayalam, English, Hindi",
          icon: <Globe size={18} />,
        },
        {
          text: "E-filing & support in mandatory regulatory compliance",
          icon: <MonitorSmartphone size={18} />,
        },
      ],
    },
    {
      id: "governance",
      title: "E-Governance & Digital Empowerment",
      icon: <MonitorSmartphone size={32} />,
      description:
        "Digital solutions and support services for accessing government schemes and empowering communities through technology and skill development.",
      color: "from-blue-600 to-blue-800",
      bgImage: "/images/digital-bg.jpg",
      items: [
        {
          text: "Assistance in access to government schemes, documentation & applications",
          icon: <FileText size={18} />,
        },
        {
          text: "Skill development & vocational training",
          icon: <GraduationCap size={18} />,
        },
        {
          text: "Digital services for rural empowerment (internet access, IT support)",
          icon: <Globe size={18} />,
        },
        {
          text: "Support for public welfare laws & statutory benefits",
          icon: <Scale size={18} />,
        },
        {
          text: "Filing of complaints with regulatory bodies (NC Commission, ST Commission, etc.)",
          icon: <FileCheck size={18} />,
        },
      ],
    },
    {
      id: "advisory",
      title: "Advisory & Support Services",
      icon: <Users size={32} />,
      description:
        "Expert guidance and advocacy for information access, dispute resolution, and social justice, ensuring your rights are protected and voices heard.",
      color: "from-slate-700 to-slate-900",
      bgImage: "/images/advisory-bg.jpg",
      items: [
        {
          text: "Assistance in Information Access Requests (RTI applications & consumer protection processes)",
          icon: <FileText size={18} />,
        },
        {
          text: "Facilitation of Dispute Resolution Processes (guidance on mediation & ADR mechanisms)",
          icon: <Scale size={18} />,
        },
        {
          text: "Regulatory & Compliance Support (property documentation, procedural filings)",
          icon: <ShieldCheck size={18} />,
        },
        {
          text: "Conflict Resolution Guidance (ADR awareness & coordination support)",
          icon: <Users size={18} />,
        },
        {
          text: "Social Justice & Human Rights Advocacy",
          icon: <Scale size={18} />,
        },
        {
          text: "Public Awareness & Rights Education (informational sessions, training programs)",
          icon: <GraduationCap size={18} />,
        },
        {
          text: "Specialized Partner Services in Rural Finance & Mobility Solutions",
          icon: <Briefcase size={18} />,
        },
      ],
    },
  ];

  const process = [
    {
      title: "Initial Consultation",
      description:
        "We begin with a thorough assessment of your needs and challenges to develop a customized approach.",
      icon: <Users size={24} />,
    },
    {
      title: "Strategic Planning",
      description:
        "Our experts create a strategic plan tailored to your specific requirements and objectives.",
      icon: <ScrollText size={24} />,
    },
    {
      title: "Implementation",
      description:
        "We execute the planned strategy with precision, keeping you informed at every step.",
      icon: <FileCheck size={24} />,
    },
    {
      title: "Ongoing Support",
      description:
        "Our relationship continues with dedicated support to ensure lasting success and compliance.",
      icon: <CheckCircle size={24} />,
    },
  ];

  const testimonials = [
    {
      text: "Padma Consultancy Services provided exceptional guidance through complex aviation regulations. Their expertise was invaluable to our operations.",
      author: "Rajesh Kumar",
      position: "Operations Director, SkyLink Aviation",
    },
    {
      text: "The team's knowledge of e-governance solutions transformed how our rural community accesses government services. Truly life-changing work.",
      author: "Meena Patel",
      position: "Community Development Officer",
    },
    {
      text: "Their advisory services helped us navigate a complex regulatory landscape with confidence and clarity. Highly recommended.",
      author: "Thomas Philip",
      position: "CEO, Regional Transport Services",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section
          ref={sectionRefs.hero}
          id="hero"
          className="relative bg-gradient-to-r from-indigo-900 to-slate-900 text-white py-32"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/70"></div>

          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-slate-200">
                Comprehensive solutions tailored to meet your regulatory,
                digital, and advisory needs with expertise and dedication.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white text-indigo-900 hover:bg-indigo-100 font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Consultation
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-0 left-0 w-full"
            >
              {/* <div className="flex justify-center">
                <div
                  className="bg-white p-4 rounded-t-lg text-indigo-800 cursor-pointer hover:bg-indigo-100 transition-colors duration-300"
                  onClick={() => scrollToSection("overview")}
                >
                  <ChevronDown size={24} />
                </div>
              </div> */}
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section
          ref={sectionRefs.overview}
          id="overview"
          className="py-16 md:py-24"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              animate={visibleSections.overview ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Comprehensive Services
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                At Aviate Consultancy Services, we offer specialized expertise
                across regulatory compliance, digital empowerment, and advisory
                support to help organizations and communities thrive in an
                increasingly complex world.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={visibleSections.overview ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`p-6 bg-gradient-to-r ${service.color} text-white`}
                  >
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="ml-3 text-xl font-semibold">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-100">
                      {service.description.split(" ").slice(0, 10).join(" ")}...
                    </p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.items.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="text-indigo-600 mr-2 mt-1">
                            {item.icon}
                          </div>
                          <p className="text-sm text-slate-700">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => scrollToSection(service.id)}
                        className={`text-sm font-medium inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300`}
                      >
                        Learn More <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Navigation */}
        <div className="sticky top-0 z-20 bg-white border-b border-slate-200 shadow-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="flex overflow-x-auto no-scrollbar">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                    activeSection === service.id
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-slate-600 hover:text-indigo-500"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Service Sections */}
        {services.map((service) => (
          <section
            key={service.id}
            ref={sectionRefs[service.id]}
            id={service.id}
            className="py-16 md:py-24"
          >
            <div className="container mx-auto px-6 max-w-6xl">
              <motion.div
                initial="hidden"
                animate={visibleSections[service.id] ? "visible" : "hidden"}
                variants={fadeIn}
                className="mb-12"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg mr-4 bg-gradient-to-r ${service.color} text-white`}
                  >
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 max-w-4xl">
                  {service.description}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={visibleSections[service.id] ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-2 bg-slate-100 p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-6">
                      Our Offerings
                    </h3>

                    <motion.div
                      variants={staggerContainer}
                      className="space-y-6"
                    >
                      {service.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          variants={fadeIn}
                          className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <div
                            className={`p-2 rounded-full bg-gradient-to-r ${service.color} text-white mr-4 flex-shrink-0`}
                          >
                            {item.icon}
                          </div>
                          <p className="text-slate-700">{item.text}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="col-span-3 p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-6">
                      How We Help
                    </h3>

                    <motion.div
                      variants={fadeIn}
                      className="prose max-w-none text-slate-600"
                    >
                      <p className="mb-4">
                        Our team of experts brings years of specialized
                        experience in {service.title.toLowerCase()} to help you
                        navigate complex challenges and achieve your objectives
                        with confidence.
                      </p>

                      <h4 className="text-lg font-medium text-slate-800 mt-8 mb-4">
                        Our Approach
                      </h4>
                      <p className="mb-4">
                        We take a client-centered approach, focusing on your
                        specific needs and developing customized solutions that
                        address your unique challenges. Our process ensures
                        thorough attention to detail while maintaining the
                        highest standards of professional service.
                      </p>

                      <h4 className="text-lg font-medium text-slate-800 mt-8 mb-4">
                        Why Choose Us
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Specialized expertise in{" "}
                          {service.id === "regulatory"
                            ? "aviation regulations"
                            : service.id === "governance"
                            ? "digital governance"
                            : "advisory services"}
                        </li>
                        <li>
                          Dedicated team of professionals committed to your
                          success
                        </li>
                        <li>Proven track record of delivering results</li>
                        <li>
                          Personalized approach tailored to your specific
                          requirements
                        </li>
                        <li>Ongoing support throughout the entire process</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn} className="mt-8">
                      <button
                        onClick={() => scrollToSection("contact")}
                        className={`bg-gradient-to-r ${service.color} text-white py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center`}
                      >
                        <Briefcase size={18} className="mr-2" />
                        Discuss Your Requirements
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Our Process Section */}
        <section
          ref={sectionRefs.process}
          id="process"
          className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              animate={visibleSections.process ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Service Process
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure quality service
                delivery and client satisfaction at every step of the journey.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={visibleSections.process ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="text-indigo-600 mb-4 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section
          ref={sectionRefs.testimonials}
          id="testimonials"
          className="py-16 md:py-24 bg-gradient-to-r from-indigo-900 to-slate-900 text-white"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              animate={visibleSections.testimonials ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-200 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to
                say about our services.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={visibleSections.testimonials ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                >
                  <div className="mb-4 text-indigo-300">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-slate-100 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-300">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

       
        {/* Contact Section */}
        <section
          ref={sectionRefs.contact}
          id="contact"
          className="py-16 md:py-24 bg-white"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              animate={visibleSections.contact ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Ready to discuss how we can help you? Schedule a consultation or
                reach out to our team.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={visibleSections.contact ? "visible" : "hidden"}
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            >
              <div className="lg:col-span-2 bg-slate-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-indigo-600 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Phone</p>
                      <p className="text-slate-600">+91 9968955004</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-indigo-600 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <p className="text-slate-600">
                      info@aviationconsultancy.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-indigo-600 mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">
                        Business Hours
                      </p>
                      <p className="text-slate-600">
                        Monday - Friday: 9AM - 6PM
                      </p>
                      <p className="text-slate-600">Saturday: 9AM - 1PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Send Us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Service Interest
                    </label>
                    <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="">Select a service</option>
                      <option value="regulatory">
                        Regulatory Compliance & Civil Aviation Advisory
                      </option>
                      <option value="governance">
                        E-Governance & Digital Empowerment
                      </option>
                      <option value="advisory">
                        Advisory & Support Services
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                      placeholder="Tell us about your requirements"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our services can benefit your
                organization.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}
