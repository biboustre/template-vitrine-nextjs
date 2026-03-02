import Link from "next/link";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";

export const metadata = {
  title: "Entreprise d’assainissement – Travaux conformes aux normes | Var & Alpes-Maritimes",
  description:
    "Entreprise spécialisée en assainissement collectif et individuel : fosse septique, micro-station, raccordement tout-à-l’égout, VRD. Intervention rapide dans le Var et les Alpes-Maritimes.",
};

export default function AssainissementPage() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Assainissement", href: "/services/assainissement" },
  ];

  return (
    <main className="container mx-auto px-4 py-16">

      <BreadcrumbSchema items={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <ServiceSchema
        service="Assainissement"
        city={{ name: "Var & Alpes-Maritimes", department: "PACA" }}
        // geo a adapter a la reel position
        geo={{lat: 43.424, lng: 6.769, radiusKm: 50}} 
      />

      <h1 className="text-4xl font-bold mb-6">
        Entreprise d&apos;assainissement – Travaux conformes aux normes dans le Var et les Alpes-Maritimes
      </h1>

      <section className="prose max-w-none">

        <p>
          Notre entreprise est spécialisée dans les travaux d&apos;assainissement collectif et individuel.
          Nous intervenons pour la pose, la rénovation et la mise en conformité des systèmes d&apos;évacuation
          des eaux usées pour les particuliers et professionnels.
        </p>

        <h2>Qu&apos;est-ce que l&apos;assainissement ?</h2>
        <p>
          L&apos;assainissement regroupe l&apos;ensemble des techniques permettant la collecte, le traitement
          et l&apos;évacuation des eaux usées domestiques et industrielles, dans le respect des normes sanitaires
          et environnementales.
        </p>

        <h2>Nos prestations d&apos;assainissement</h2>
        <ul>
          <li>Assainissement collectif</li>
          <li>Assainissement non collectif (ANC)</li>
          <li>Installation de fosses septiques</li>
          <li>Micro-stations d&apos;épuration</li>
          <li>Raccordement au tout-à-l&apos;égout</li>
          <li>Mise aux normes SPANC</li>
        </ul>

        <h2>Pourquoi choisir notre entreprise ?</h2>
        <p>
          Nous disposons d&apos;un savoir-faire reconnu et d&apos;équipements modernes permettant
          d&apos;intervenir rapidement, efficacement et dans le strict respect de la réglementation en vigueur.
        </p>

        <h2>Nos zones d&apos;intervention</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cities.map(city => (
            <li key={city.slug}>
              <Link
                href={`/services/assainissement/${city.slug}`}
                className="text-blue-600 hover:underline"
              >
                Assainissement à {city.name}
              </Link>
            </li>
          ))}
        </ul>

      </section>

    </main>
  );
}