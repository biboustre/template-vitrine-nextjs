import Link from "next/link";
import { cities } from "../../data/cities";

const SERVICES = [
  { key: "assainissement", label: "Assainissement" },
  { key: "piscine", label: "Piscine" },
  { key: "terrassement", label: "Terrassement" },
];

export default function SeoFooter() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Bloc présentation */}
        <div>
          <h3 className="font-bold text-lg mb-4">Entreprise de TP & Assainissement</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Spécialiste des travaux de terrassement, assainissement et piscines dans le Var (83) et les Alpes-Maritimes.
            Intervention rapide dans plus de {cities.length} communes.
          </p>
        </div>

        {/* Bloc services */}
        <div>
          <h3 className="font-bold mb-4">Nos services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.map(service => (
              <li key={service.key}>
                <Link
                  href={`/services/${service.key}`}
                  className="hover:text-white"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc villes */}
        <div>
          <h3 className="font-bold mb-4">Zones d’intervention</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {cities.slice(0, 12).map(city => (
              <li key={city.slug}>
                <Link
                  href={`/zones/${city.slug}`}
                  className="hover:text-white"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc SEO fort */}
        <div>
          <h3 className="font-bold mb-4">Prestations locales</h3>
          <ul className="space-y-2 text-sm">
            {cities.slice(0, 6).map(city => (
              <li key={city.slug}>
                <Link
                  href={`/services/assainissement/${city.slug}`}
                  className="hover:text-white"
                >
                  Assainissement à {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} – Tous droits réservés – Travaux publics & assainissement
      </div>
    </footer>
  );
}