import Link from "next/link";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";

export const metadata = {
  title:
    "Entreprise de terrassement – Travaux professionnels | Var & Alpes-Maritimes",
  description:
    "Entreprise spécialisée en terrassement : nivellement, excavation, fondations, VRD, terrassement piscine et maison. Intervention rapide dans le Var et les Alpes-Maritimes.",
};

export default function TerrassementPage() {
  const breadcrumbs = [
    // { label: "Accueil", href: "/" },
    { label: "Terrassement", href: "/services/terrassement" },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <ServiceSchema
        service="Terrassement"
        city={{
          name: "Var & Alpes-Maritimes",
          department: "PACA",
        }}
      />

      {/* Animation container */}
      <div className="flex flex-col gap-8 text-gray-400">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in">
            Entreprise de terrassement – Travaux professionnels dans le Var et
            les Alpes-Maritimes
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <section className="prose max-w-none text-lg  animate-fade-in">
            <p>
              Notre entreprise est spécialisée dans les travaux de terrassement
              pour les particuliers et professionnels. Nous intervenons pour
              tous types de chantiers : maisons individuelles, piscines,
              aménagements extérieurs, VRD et nivellement de terrain.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <section className="prose max-w-none animate-fade-in">
            <h2 className="text-2xl font-semibold text-[#fbbf24] mb-2">
              Qu&apos;est-ce que le terrassement ?
            </h2>
            <p>
              Le terrassement consiste à préparer un terrain avant construction.
              Il comprend l&apos;excavation, le nivellement, la stabilisation du
              sol et la création des fondations nécessaires à la solidité des
              ouvrages.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <section className="prose max-w-none animate-fade-in">
            <h2 className="text-2xl font-semibold text-[#fbbf24] mb-2">
              Nos prestations de terrassement
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Terrassement pour maison individuelle</li>
              <li>Terrassement piscine</li>
              <li>Travaux de VRD (Voirie et Réseaux Divers)</li>
              <li>Excavation et déblaiement</li>
              <li>Nivellement et mise à niveau du terrain</li>
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <section className="prose max-w-none animate-fade-in">
            <h2 className="text-2xl font-semibold text-[#fbbf24] mb-2">
              Pourquoi choisir notre entreprise ?
            </h2>
            <p>
              Nous disposons d&apos;un matériel professionnel performant et
              d&apos;une équipe expérimentée capable de s&apos;adapter à tous
              types de terrains. Nous garantissons un travail précis, rapide et
              conforme aux normes en vigueur.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <section className="prose max-w-none animate-fade-in">
            <h2 className="text-2xl font-semibold text-[#fbbf24] mb-2">
              Nos zones d&apos;intervention
            </h2>
            <p>
              Nous intervenons dans de nombreuses communes du Var et des
              Alpes-Maritimes :
            </p>
            <section className="rounded-xl mt-8 shadow-lg animate-fade-in">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map((city, idx) => (
                  <AnimatedSection key={city.slug} delay={600 + idx * 60}>
                    <li>
                      <Link
                        href={`/services/terrassement/${city.slug}`}
                        className="block px-3 py-2 rounded-lg bg-white  text-gray-900 font-medium shadow "
                      >
                        Terrassement à {city.name}
                      </Link>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </section>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}

