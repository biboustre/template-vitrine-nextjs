import Link from "next/link";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";

export const metadata = {
  title: "Terrassement piscine – Préparation de terrain | Var & Alpes-Maritimes",
  description:
    "Entreprise spécialisée en terrassement piscine : fouille, excavation, nivellement, réseaux, fondations. Intervention rapide dans le Var et les Alpes-Maritimes.",
};

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Piscine", href: "/services/piscine" },
  ];

  const styleParagraphe = "md:text-xl 2xl:text-2xl";

export default function PiscinePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <ServiceSchema
        service="Terrassement piscine"
        city={{ name: "Var & Alpes-Maritimes", department: "PACA" }}
      />

      <div className="flex flex-col gap-8 text-slate-50">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl text-[#fbbf24] md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in">
            Terrassement piscine – Préparation de terrain dans le Var et les Alpes-Maritimes
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <section className="prose max-w-none text-lg animate-fade-in">
            <p className={styleParagraphe}>
              Le terrassement piscine est une étape essentielle pour garantir la stabilité,
              la longévité et la sécurité de votre bassin. Nous réalisons tous les travaux
              préparatoires nécessaires avant la construction de votre piscine.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <section className="prose max-w-none animate-fade-in">
            <TitleH2 title="Pourquoi le terrassement piscine est essentiel ?" />
            <p className={styleParagraphe}>
              Une préparation de terrain rigoureuse permet d&apos;éviter les affaissements,
              infiltrations et désordres structurels. Chaque chantier est étudié
              afin d&apos;adapter la méthode au type de sol rencontré.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <section className="prose max-w-none animate-fade-in">
            <TitleH2 title="Nos prestations piscine" />
            <ul className={`list-disc pl-6 space-y-2 ${styleParagraphe}`}>
              <li>Implantation et traçage</li>
              <li>Fouille piscine</li>
              <li>Excavation et déblaiement</li>
              <li>Nivellement du terrain</li>
              <li>Création des réseaux</li>
              <li>Remblaiement et finition</li>
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <section className="prose max-w-none animate-fade-in">
            <TitleH2 title="Nos zones d'interventions" />
            <p className={styleParagraphe}>
              Nous intervenons dans de nombreuses communes du Var et des Alpes-Maritimes :
            </p>
            <section className="rounded-xl mt-14 animate-fade-in">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map((city, idx) => (
                  <AnimatedSection key={city.slug} delay={500 + idx * 60}>
                    <li>
                      <Link
                        href={`/services/piscine/${city.slug}`}
                        className="block px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:bg-gray-400 transition-colors"
                      >
                        Piscine à {city.name}
                        <span className="ml-2">→</span>
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


function TitleH2({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-semibold text-[#fbbf24] mb-2 animate-fade-in">
      {title}
    </h2>
  );
}
