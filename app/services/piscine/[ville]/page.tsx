import SeoInternalLinks from "@/app/components/seo/SeoInternalLinks";
import { cities } from "../../../data/cities";
import { generateServiceText } from "../../../lib/seo";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import GeoSchema from "@/app/components/seo/GeoSchema";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";

type PageProps = {
  params: Promise<{ ville: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { ville } = await params;
  const slug = decodeURIComponent(ville).toLowerCase();
  const city = cities.find((c) => c.slug === slug);

  if (!city)
    return {
      title: "Page non trouvée",
    };

  return {
    title: `Terrassement piscine à ${city.name} – Expert local`,
    description: `Terrassement et préparation de terrain pour piscine à ${city.name}. Étude du sol, excavation, nivellement. Intervention rapide.`,
  };
}

export default async function PiscineVillePage({ params }: PageProps) {
  const { ville } = await params;
  const slug = decodeURIComponent(ville).toLowerCase();
  const city = cities.find((c) => c.slug === slug);

  if (!city) return notFound();

  const content = generateServiceText("piscine", city);

  const breadcrumbs = [
    { label: "Piscine", href: "/services/piscine" },
    { label: `Piscine à ${city.name}`, href: `/services/piscine/${city.slug}` },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        service="Piscine"
        city={{
          name: city.name,
          department: city.department,
        }}
      />
      <GeoSchema lat={city.lat} lng={city.lng} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="flex flex-col gap-8 text-slate-50">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl text-[#fbbf24] md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in">
            Terrassement de piscine à {city.name}
          </h1>
        </AnimatedSection>
        {content.split("\n").map((line, i) => (
          <AnimatedSection key={i} delay={100 + i * 40}>
            <p className="md:text-xl 2xl:text-2xl animate-fade-in">{line}</p>
          </AnimatedSection>
        ))}
        <AnimatedSection delay={content.split("\n").length * 40 + 200}>
          <SeoInternalLinks
            service="piscine"
            city={{
              name: city.name,
              slug: city.slug,
            }}
          />
        </AnimatedSection>
      </div>
    </main>
  );
}
