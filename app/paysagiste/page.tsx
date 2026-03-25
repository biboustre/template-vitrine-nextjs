'use client';

import Image from "next/image";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";

export default function PaysagistePage() {
  return (
    <main className="bg-gradient-to-br from-gray-900to-gray-950 min-h-screen">
      {/* HERO */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col items-start justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-xl">
            Paysagiste moderne
            <br />
            <span className="text-primary">
              Créons votre espace vert d&apos;exception
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-xl">
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
        </div>
        <div className="flex-1 flex justify-center items-center relative min-h-[320px]">
          <Image
            src="/images/banners/engin-4.jpg"
            alt="Paysagiste moderne"
            width={600}
            height={500}
            className="rounded-3xl shadow-2xl object-cover border-4 border-primary/30"
            priority
          />
          {/* Ajoutez une image adaptée dans public/images/banners/engin-4.jpg */}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10text-white text-center">Nos services paysagistes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-900 hover:scale-105 transition-transform duration-300"
            >
              <span className="text-5xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-primary dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* RÉALISATIONS / TÉMOIGNAGES */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <SectionTitle>Ils nous ont fait confiance</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="bg-primary/90 text-white dark:bg-primary/80 flex flex-col items-center justify-center min-h-[180px]"
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
              <blockquote className="italic text-lg">“{t.quote}”</blockquote>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Prêt à transformer votre extérieur ?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
          Contactez notre équipe de paysagistes passionnés pour un projet
          sur-mesure, moderne et durable.
        </p>
        <Button
          href="/contact"
          className="text-lg px-10 py-4 rounded-full shadow-xl"
        >
          Je prends rendez-vous
        </Button>
      </section>
    </main>
  );
}
