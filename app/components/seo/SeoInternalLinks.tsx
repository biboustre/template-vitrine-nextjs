import Link from "next/link";
import { cities } from "../../data/cities";

type Props = {
  service: "assainissement" | "piscine" | "terrassement";
  city: {
    name: string;
    slug: string;
  };
};

const SERVICES = [
  { key: "assainissement", label: "Assainissement" },
  { key: "piscine", label: "Piscine" },
  { key: "terrassement", label: "Terrassement" },
];

export default function SeoInternalLinks({ service, city }: Props) {
  return (
    <section className="mt-10 space-y-16 bg-[#fbbf24] rounded-2xl shadow-xl p-8">
      {/* 🔹 Autres services dans la même ville */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Nos autres services à {city.name}
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {SERVICES.filter((s) => s.key !== service).map((s) => (
            <li key={s.key}>
              <Link
                href={`/services/${s.key}/${city.slug}`}
                className="block px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:bg-gray-200 transition-colors "
              >
                {s.label} à {city.name}
                <span className="ml-2">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Même service dans les villes voisines */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {SERVICES.find((s) => s.key === service)?.label} dans les villes
          voisines
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cities
            .filter((c) => c.slug !== city.slug)
            .slice(0, 9)
            .map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${service}/${c.slug}`}
                  className="block px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:bg-gray-200 transition-colors"
                >
                  {SERVICES.find((s) => s.key === service)?.label} à {c.name}
                  <span className="ml-2">→</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
