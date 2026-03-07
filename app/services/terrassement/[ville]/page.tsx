import Link from "next/link";
import { cities } from "../../../data/cities";
import { generateServiceText } from "../../../lib/seo";
import { notFound } from "next/navigation";
import SeoInternalLinks from "@/app/components/seo/SeoInternalLinks";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import GeoSchema from "../../../components/seo/GeoSchema";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";

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
    {
      label: `Terrassement à ${city.name}`,
      href: `/services/terrassement/${city.slug}`,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        service="Terrassement"
        city={{ name: city.name, department: city.department }}
      />
      <GeoSchema lat={city.lat} lng={city.lng} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="flex flex-col gap-8 text-slate-50">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl text-[#fbbf24] md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in">
            Terrassement à {city.name} ({city.department})
          </h1>
        </AnimatedSection>
        {content.split("\n").map((line, i) => (
          <AnimatedSection key={i} delay={100 + i * 40}>
            <p className="md:text-xl 2xl:text-2xl animate-fade-in">{line}</p>
          </AnimatedSection>
        ))}
        <AnimatedSection delay={content.split("\n").length * 40 + 200}>
          <SeoInternalLinks
            service="terrassement"
            city={{ name: city.name, slug: city.slug }}
          />
        </AnimatedSection>
      </div>
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
