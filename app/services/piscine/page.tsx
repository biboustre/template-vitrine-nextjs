import Link from "next/link";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";

export const metadata = {
  title: "Terrassement piscine – Préparation de terrain | Var & Alpes-Maritimes",
  description:
    "Entreprise spécialisée en terrassement piscine : fouille, excavation, nivellement, réseaux, fondations. Intervention rapide dans le Var et les Alpes-Maritimes.",
};

export default function PiscinePage() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Piscine", href: "/services/piscine" },
  ];

  return (
    <main className="container mx-auto px-4 py-16">

      <BreadcrumbSchema items={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <ServiceSchema
        service="Terrassement piscine"
        city={{ name: "Var & Alpes-Maritimes", department: "PACA" }}
      />

      <h1 className="text-4xl font-bold mb-6">
        Terrassement piscine – Préparation de terrain dans le Var et les Alpes-Maritimes
      </h1>

      <section className="prose max-w-none">

        <p>
          Le terrassement piscine est une étape essentielle pour garantir la stabilité,
          la longévité et la sécurité de votre bassin. Nous réalisons tous les travaux
          préparatoires nécessaires avant la construction de votre piscine.
        </p>

        <h2>Pourquoi le terrassement piscine est essentiel ?</h2>
        <p>
          Une préparation de terrain rigoureuse permet d&apos;éviter les affaissements,
          infiltrations et désordres structurels. Chaque chantier est étudié
          afin d&apos;adapter la méthode au type de sol rencontré.
        </p>

        <h2>Nos prestations piscine</h2>
        <ul>
          <li>Implantation et traçage</li>
          <li>Fouille piscine</li>
          <li>Excavation et déblaiement</li>
          <li>Nivellement du terrain</li>
          <li>Création des réseaux</li>
          <li>Remblaiement et finition</li>
        </ul>

        <h2>Nos zones d&apos;intervention</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cities.map(city => (
            <li key={city.slug}>
              <Link
                href={`/services/piscine/${city.slug}`}
                className="text-blue-600 hover:underline"
              >
                Piscine à {city.name}
              </Link>
            </li>
          ))}
        </ul>

      </section>

    </main>
  );
}