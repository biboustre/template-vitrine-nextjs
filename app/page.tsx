"use client";
import HeroSection from "@/app/components/pages/home/HeroSection";
import ServicesSection from "@/app/components/pages/home/ServicesSection";
import TestimonialsSection from "@/app/components/pages/home/TestimonialsSection";
import FaqSection from "@/app/components/pages/home/FaqSection";
import ContactSection from "./components/pages/home/ContactSection";
import ZoneIntervention from "./components/pages/home/ZoneIntervention";

export default function Home() {
 
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ZoneIntervention />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
