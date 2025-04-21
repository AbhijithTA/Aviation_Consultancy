'use client'

import Image from "next/image";
import NavbarComponent from '@/components/Navbar'
import AviationComplianceHero from '@/components/HeroSection'
import AboutUsSection from '@/components/AboutUsSection'
import ValuesAndVision from '@/components/ValuesComponent'
import ServicesComponent from '@/components/ServiceSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import FooterSection from '@/components/FooterSection'
import DisclaimerOverlay from '@/components/DisclaimerOverlay'
import { useEffect, useState } from "react";

export default function Home() {

  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);

  useEffect(()=>{
    const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
    if(disclaimerAccepted === 'true') {
      setAcceptedDisclaimer(true);
    } 

  },[]);

  const handleAccept = () =>{
    localStorage.setItem('disclaimerAccepted', 'true');
    setAcceptedDisclaimer(true);
  }

  if (!acceptedDisclaimer) {
    return <DisclaimerOverlay onAccept={handleAccept} />
  }
  return (
    <>
    <NavbarComponent  />
    <AviationComplianceHero />
    <section id="aboutUs">
    <AboutUsSection />
    </section>
    <ValuesAndVision />
    <ServicesComponent />
    <WhyChooseUs />
    <FooterSection />
    </>
  );
}
