"use client";
import HeroSection from "@/app/components/home/HeroSection";
import ServicesSection from "@/app/components/home/ServicesSection";
import ClientsSection from "@/app/components/home/ClientsSection";
import TeamSection from "@/app/components/home/TeamSection";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import FaqSection from "@/app/components/home/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/90 dark:bg-primary-dark text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à booster votre présence en ligne ?
        </h2>
        <p className="text-lg mb-8">
          Contactez-nous pour un devis gratuit et personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 text-slate-800 rounded-full bg-white text-primary font-semibold shadow-lg hover:bg-gray-100 transition-colors"
        >
          Demander un devis
        </a>
      </section>
    </main>
  );
}