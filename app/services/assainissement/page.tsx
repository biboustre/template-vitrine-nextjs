import Link from "next/link";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";

export const metadata = {
  title:
    "Entreprise d’assainissement – Travaux conformes aux normes | Var & Alpes-Maritimes",
  description:
    "Entreprise spécialisée en assainissement collectif et individuel : fosse septique, micro-station, raccordement tout-à-l’égout, VRD. Intervention rapide dans le Var et les Alpes-Maritimes.",
};

export default function AssainissementPage() {
  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Assainissement", href: "/services/assainissement" },
  ];

  const styleParagraphe = "md:text-xl 2xl:text-2xl";

  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <ServiceSchema
        service="Assainissement"
        city={{ name: "Var & Alpes-Maritimes", department: "PACA" }}
        geo={{ lat: 43.424, lng: 6.769, radiusKm: 50 }}
      />

      <div className="flex flex-col gap-8 text-slate-50">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl text-[#fbbf24] md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in">
            Entreprise d&apos;assainissement – Travaux conformes aux normes dans
            le Var et les Alpes-Maritimes
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <section className="prose max-w-none text-lg animate-fade-in">
            <p className={styleParagraphe}>
              Notre entreprise est spécialisée dans les travaux
              d&apos;assainissement collectif et individuel. Nous intervenons
              pour la pose, la rénovation et la mise en conformité des systèmes
              d&apos;évacuation des eaux usées pour les particuliers et
              professionnels.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <section className="prose max-w-none animate-fade-in">
            <TitleH2 title="Qu'est-ce que l'assainissement ?" />
            <p className={styleParagraphe}>
              L&apos;assainissement regroupe l&apos;ensemble des techniques
              permettant la collecte, le traitement et l&apos;évacuation des
              eaux usées domestiques et industrielles, dans le respect des
              normes sanitaires et environnementales.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <section className="prose max-w-none animate-fade-in">
            <TitleH2 title="Nos prestations d'assainissement" />
            <ul className={`list-disc pl-6 space-y-2 ${styleParagraphe}`}>
              <li>Assainissement collectif</li>
              <li>Assainissement non collectif (ANC)</li>
              <li>Installation de fosses septiques</li>
              <li>Micro-stations d&apos;épuration</li>
              <li>Raccordement au tout-à-l&apos;égout</li>
              <li>Mise aux normes SPANC</li>
            </ul>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <section className="prose max-w-none animate-fade-in">
            <TitleH2 title="Pourquoi choisir notre entreprise ?" />
            <p className={styleParagraphe}>
              Nous disposons d&apos;un savoir-faire reconnu et
              d&apos;équipements modernes permettant d&apos;intervenir
              rapidement, efficacement et dans le strict respect de la
              réglementation en vigueur.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <section className="prose max-w-none animate-fade-in">
            <TitleH2 title="Nos zones d'interventions" />
            <p className={styleParagraphe}>
              Nous intervenons dans de nombreuses communes du Var et des
              Alpes-Maritimes :
            </p>
            <section className="rounded-xl mt-14 animate-fade-in">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map((city, idx) => (
                  <AnimatedSection key={city.slug} delay={600 + idx * 60}>
                    <li>
                      <Link
                        href={`/services/assainissement/${city.slug}`}
                        className=" px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:bg-gray-400 transition-colors flex items-center"
                      >
                        Assainissement à {city.name}
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
