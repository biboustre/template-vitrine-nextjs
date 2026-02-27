
import Link from "next/link";
import { cities } from "../../../data/cities";
import { generateServiceText } from "../../../lib/seo";
import { notFound } from "next/navigation";
import SeoInternalLinks from "@/app/components/seo/SeoInternalLinks";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/app/components/seo/ServiceShema";

type PageProps = {
  params: Promise<{
    ville: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
   const { ville } = await params;
  const slug = decodeURIComponent(ville).toLowerCase();
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return {
      title: "Page non trouvée",
    };
  }

  return {
    title: `Entreprise de terrassement à ${city.name} – Travaux professionnels`,
    description: `Entreprise spécialisée en terrassement à ${city.name}. Nivellement, excavation, fondations, VRD. Intervention rapide dans le ${city.department}.`,
  };
}

export default async function TerrassementVillePage({ params }: PageProps) {
  // ⚡ "await" si params est une Promise
  const { ville } = await params; 
  const slug = decodeURIComponent(ville).toLowerCase();

  if (!slug) return notFound();

  const city = cities.find((c) => c.slug === slug);
  if (!city) return notFound();

  const content = generateServiceText("terrassement", city);

  const breadcrumbs = [
    { label: "Terrassement", href: "/services/terrassement" },
    { label: `Terrassement à ${city.name}`, href: `/services/terrassement/${city.slug}` },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema service="Terrassement" city={{ name: city.name, department: city.department }} />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-4xl font-bold mb-6">
        Terrassement à {city.name} ({city.department})
      </h1>

      <article className="prose max-w-none">
        {content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </article>

      <SeoInternalLinks service="terrassement" city={{ name: city.name, slug: city.slug }} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Nos interventions locales</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link href={`/services/terrassement/${c.slug}`}>
                Terrassement à {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

{
  /* <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Nos services à {city.name}</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <Link href={`/services/assainissement/${city.slug}`}>
              Assainissement à {city.name}
            </Link>
          </li>
          <li>
            <Link href={`/services/piscine/${city.slug}`}>
              Piscine à {city.name}
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Terrassement dans les villes voisines
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cities
            .filter((c) => c.slug !== city.slug)
            .slice(0, 6)
            .map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/terrassement/${c.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  Terrassement à {c.name}
                </Link>
              </li>
            ))}
        </ul>
      </section> */
}
