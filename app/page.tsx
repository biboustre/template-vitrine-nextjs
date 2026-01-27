"use client";
import HeroSection from "@/app/components/pages/home/HeroSection";
import ServicesSection from "@/app/components/pages/home/ServicesSection";
// import ClientsSection from "@/app/components/home/ClientsSection";
import TestimonialsSection from "@/app/components/pages/home/TestimonialsSection";
import FaqSection from "@/app/components/pages/home/FaqSection";
import ContactSection from "./components/pages/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      {/* <ClientsSection /> */}
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
