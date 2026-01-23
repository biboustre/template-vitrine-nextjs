"use client";
import HeroSection from "@/app/components/home/HeroSection";
import ServicesSection from "@/app/components/home/ServicesSection";
// import ClientsSection from "@/app/components/home/ClientsSection";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import FaqSection from "@/app/components/home/FaqSection";
import CallToSection from "./components/home/CallToSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      {/* <ClientsSection /> */}
      <TestimonialsSection />
      <FaqSection />
      <CallToSection />
    </main>
  );
}