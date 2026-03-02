import InteractiveMap from "@/app/components/geo/InteractiveMap";
import { cities } from "@/app/components/geo/citiesData";
import Link from "next/link";

export default function ZonesInterventionPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Zones d&apos;intervention – Terrassement & Travaux Publics
      </h1>

      <p className="mb-10 text-lg">
        Nous intervenons rapidement dans toutes les villes suivantes pour vos
        travaux de terrassement, VRD, assainissement et piscines.
      </p>

      <InteractiveMap />

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Nos zones d’intervention
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/services/terrassement/${city.slug}`}
                className="text-blue-600 hover:underline"
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