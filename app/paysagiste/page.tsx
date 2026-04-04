"use client";

import Image from "next/image";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { servicesPaysagiste } from "../data/services";
import { testimonials } from "../data/testimonials";
import AnimatedSection from "../components/ui/animations/AnimatedSection";

export default function PaysagistePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <AnimatedSection
          delay={200}
          className="flex-1 flex flex-col items-start justify-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
            Paysagiste moderne
            <br />
            <span className="text-[#fbbf24]">
              Créons votre espace vert d&apos;exception
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">
            Conception, aménagement et entretien de jardins, terrasses et
            espaces extérieurs. Expertise, créativité et technologies durables
            pour sublimer votre environnement.
          </p>
          <Button
            href="/contact"
            className="text-lg px-10 py-4 rounded-full shadow-xl"
          >
            Demander un devis
          </Button>
        </AnimatedSection>
        <AnimatedSection
          delay={400}
          className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] lg:flex-1 flex justify-center items-center"
        >
          <figure className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] lg:flex-1 flex justify-center items-center">
            <Image
              src="/images/banners/deblement-arbre.jpg"
              alt="Paysagiste moderne"
              fill
              className="rounded-3xl shadow-2xl object-cover border-4 border-primary/30"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </figure>
        </AnimatedSection>
      </section>

      {/* SERVICES */}
      <AnimatedSection
        delay={100}
        className="py-20 px-4 max-w-6xl mx-auto flex flex-col items-center gap-14"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-10 text-[#fbbf24] text-center">
          Nos services paysagistes
        </h1>
        <AnimatedSection
          delay={300}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesPaysagiste.map((service, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center text-center bg-white hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <span className="text-5xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-[#fbbf24]">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base">{service.description}</p>
            </Card>
          ))}
        </AnimatedSection>
      </AnimatedSection>

      {/* RÉALISATIONS / TÉMOIGNAGES */}
      <AnimatedSection
        delay={100}
        className="py-20 px-4 max-w-5xl mx-auto flex flex-col items-center gap-12"
      >
        <h2 className="text-[#fbbf24] font-extrabold text-3xl md:text-5xl text-center">
          Ils nous ont fait confiance
        </h2>
        <AnimatedSection
          delay={300}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials
            .filter((t) => t.category === "paysagiste")
            .map((t, idx) => (
              <Card
                key={idx}
                className=" text-white bg-primary/80 flex flex-col items-center justify-center min-h-[180px]"
              >
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="mb-2 opacity-60"
                >
                  <path
                    d="M7.17 6A5.001 5.001 0 0 0 2 11v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1a5.001 5.001 0 0 0-5.83-5zm10 0A5.001 5.001 0 0 0 12 11v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1a5.001 5.001 0 0 0-5.83-5z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="italic text-lg">
                  “{t.content}”
                </blockquote>
              </Card>
            ))}
        </AnimatedSection>
      </AnimatedSection>

      {/* CTA FINAL */}
      <AnimatedSection
        delay={100}
        className="py-20 px-4 max-w-4xl mx-auto text-center"
      >
        <AnimatedSection delay={300}>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#fbbf24]">
            Prêt à transformer votre extérieur ?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto 2xl:text-">
            Contactez notre équipe de paysagistes passionnés pour un projet
            sur-mesure, moderne et durable.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <Button
            href="/contact"
            className="text-lg px-10 py-4 rounded-full shadow-xl"
          >
            Je prends rendez-vous
          </Button>
        </AnimatedSection>
      </AnimatedSection>
    </main>
  );
}
