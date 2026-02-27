import SeoInternalLinks from "@/app/components/seo/SeoInternalLinks";
import { cities } from "../../../data/cities";
import { generateServiceText } from "../../../lib/seo";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/app/components/seo/ServiceShema";

type PageProps = {
  params: Promise<{ ville: string }>;
};

export async function generateMetadata({ params }: PageProps) {
   const { ville } = await params;
  const slug = decodeURIComponent(ville).toLowerCase();
  const city = cities.find(c => c.slug === slug);

  if (!city) return { title: "Page non trouvée" };

  return {
    title: `Assainissement à ${city.name} – Installation & mise aux normes`,
    description: `Entreprise d’assainissement à ${city.name}. Installation, fosse septique, raccordement, mise aux normes. Intervention rapide.`
  };
}



export default async function AssainissementVillePage({ params }: PageProps) {
 const { ville } = await params;
  const slug = decodeURIComponent(ville).toLowerCase();
  const city = cities.find(c => c.slug === slug);
  if (!city) return notFound();

  const content = generateServiceText("assainissement", city);

  const breadcrumbs = [
    { label: "Assainissement", href: "/services/assainissement" },
    {
      label: `Assainissement à ${city.name}`,
      href: `/services/assainissement/${city.slug}`,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        service="Assainissement"
        city={{
          name: city.name,
          department: city.department,
        }}
      />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="text-4xl font-bold mb-6">
        Assainissement à {city.name} ({city.department})
      </h1>

      <article className="prose max-w-none">
        {content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </article>

      <SeoInternalLinks
        service="assainissement"
        city={{
          name: city.name,
          slug: city.slug,
        }}
      />
    </main>
  );
}
