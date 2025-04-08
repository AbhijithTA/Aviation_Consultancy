import Image from "next/image";
import NavbarComponent from '@/components/Navbar'
import AviationComplianceHero from '@/components/HeroSection'
import AboutUsSection from '@/components/AboutUsSection'
import ValuesAndVision from '@/components/ValuesComponent'
import ServicesComponent from '@/components/ServiceSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <>
    <NavbarComponent  />
    <AviationComplianceHero />
    <AboutUsSection />
    <ValuesAndVision />
    <ServicesComponent />
    <WhyChooseUs />
    <FooterSection />
    </>
  );
}
