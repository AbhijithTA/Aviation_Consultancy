"use client";

import NavbarComponent from "@/components/Navbar";
import AviationComplianceHero from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesComponent from "@/components/ServiceSection";
import FooterSection from "@/components/FooterSection";
import DisclaimerOverlay from "@/components/DisclaimerOverlay";
import { useEffect, useState } from "react";

export default function Home() {
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    const accepted = sessionStorage.getItem("disclaimerAccepted");
    setAcceptedDisclaimer(accepted === "true");
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    setAcceptedDisclaimer(true);
  };

  // Avoid flash of content before sessionStorage is checked
  if (acceptedDisclaimer === null) return null;

  if (!acceptedDisclaimer) {
    return <DisclaimerOverlay onAccept={handleAccept} />;
  }

  return (
    <>
      <NavbarComponent />
      <AviationComplianceHero />
      <section id="aboutUs">
        <AboutUsSection />
      </section>
      <ServicesComponent />
      <FooterSection />
    </>
  );
}
