"use client";

import dynamic from "next/dynamic";
const InteractiveMap = dynamic(() => import("@/app/components/geo/InteractiveMap"), { ssr: false });
// import InteractiveMap from "@/app/components/geo/InteractiveMap";
import { cities } from "@/app/components/geo/citiesData";
import Link from "next/link";

export default function ZonesInterventionPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl text-[#fbbf24] md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in">
        Zones d&apos;intervention – Terrassement & Travaux Publics
      </h1>

      <p className="mb-10 text-lg">
        Nous intervenons rapidement dans toutes les villes suivantes pour vos
        travaux de terrassement, VRD, assainissement et piscines.
      </p>

      <InteractiveMap />

      <section className="mt-16">
        <h2 className="text-4xl text-[#fbbf24] md:text-5xl font-extrabold mb-10 drop-shadow-lg tracking-tight animate-fade-in">
          Nos zones d’intervention
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/services/terrassement/${city.slug}`}
                className="block px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:bg-gray-200 transition-colors"
              >
                Terrassement à {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}