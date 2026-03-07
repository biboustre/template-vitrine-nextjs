import Link from "next/link";
import { cities } from "../../data/cities";

const SERVICES = [
  { key: "assainissement", label: "Assainissement" },
  { key: "piscine", label: "Piscine" },
  { key: "terrassement", label: "Terrassement" },
];

export default function SeoFooter() {
  return (
    <footer className="bg-primary  mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Bloc présentation */}
        <div>
          <h3 className="font-bold text-lg mb-4">Entreprise de TP & Assainissement</h3>
          <p className="2xl:text-lg leading-relaxed">
            Spécialiste des travaux de terrassement, assainissement et piscines dans le Var (83) et les Alpes-Maritimes.
            Intervention rapide dans plus de {cities.length} communes.
          </p>
        </div>

        {/* Bloc services */}
        <div>
          <h3 className="font-bold mb-4 text-2xl 2xl:text-3xl">Nos services</h3>
          <ul className="space-y-2 2xl:text-lg">
            {SERVICES.map(service => (
              <li key={service.key}>
                <Link
                  href={`/services/${service.key}`}
                  className="hover:text-slate-200"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc villes */}
        <div>
          <h3 className="font-bold mb-4 text-2xl 2xl:text-3xl">Zones d’intervention</h3>
          <ul className="grid grid-cols-2 gap-2 2xl:text-lg">
            {cities.slice(0, 12).map(city => (
              <li key={city.slug}>
                <Link
                  href={`/zones/${city.slug}`}
                  className="hover:text-slate-200"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc SEO fort */}
        <div>
          <h3 className="font-bold mb-4 text-2xl 2xl:text-3xl">Prestations locales</h3>
          <ul className="space-y-2 2xl:text-lg">
            {cities.map(city => (
              <li key={city.slug}>
                <Link
                  href={`/services/assainissement/${city.slug}`}
                  className="text-base hover:text-slate-200"
                >
                  Terrassement à {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm 2xl:text-base">
        © {new Date().getFullYear()} – Tous droits réservés – Travaux publics & assainissement
      </div>
    </footer>
  );
}