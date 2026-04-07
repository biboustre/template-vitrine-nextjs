import Link from "next/link";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

export const metadata = {
  title:
    "Entreprise d’assainissement – Travaux conformes aux normes | Var & Alpes-Maritimes",
  description:
    "Entreprise spécialisée en assainissement collectif et individuel : fosse septique, micro-station, raccordement tout-à-l’égout, VRD. Intervention rapide dans le Var et les Alpes-Maritimes.",
};

export default function AssainissementPage() {
  const breadcrumbs = [
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
      <div className="flex flex-col gap-8">
        <AnimatedSection delay={0}>
          <figure className="bg-[#fbbf24] rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/images/banners/pose-canalisation.jpg"
              alt="Assainissement professionnel"
              className="w-full rounded-xl shadow-lg object-cover h-56 md:h-72"
              width={400}
              height={300}
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight animate-fade-in">
                Entreprise d&apos;assainissement – Travaux conformes aux normes
                dans le Var et les Alpes-Maritimes
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                Des solutions d&apos;assainissement fiables, conformes et
                durables pour tous vos besoins, particuliers et professionnels.
              </p>
            </div>
          </figure>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <TitleH2 title="Qu'est-ce que l'assainissement ?" />
              <p className={styleParagraphe + " text-gray-700"}>
                L&apos;assainissement regroupe l&apos;ensemble des techniques
                permettant la collecte, le traitement et l&apos;évacuation des
                eaux usées domestiques et industrielles, dans le respect des
                normes sanitaires et environnementales.
              </p>
            </div>
            <Image
              src="/images/banners/mini-pelle.jpg"
              alt="Travaux d'assainissement"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-44 md:h-56"
              width={400}
              height={300}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
            <Image
              src="/images/banners/mini-pelle-3.jpg"
              alt="Prestations assainissement"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-44 md:h-56 order-2 md:order-1"
              width={400}
              height={300}
            />
            <div className="flex-1 order-1 md:order-2">
              <TitleH2 title="Nos prestations d'assainissement" />
              <ul
                className={`list-disc pl-6 space-y-2 ${styleParagraphe} text-gray-700`}
              >
                <li>Assainissement collectif</li>
                <li>Assainissement non collectif (ANC)</li>
                <li>Installation de fosses septiques</li>
                <li>Micro-stations d&apos;épuration</li>
                <li>Raccordement au tout-à-l&apos;égout</li>
                <li>Mise aux normes SPANC</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center"
          delay={300}
        >
          <section className="flex-1">
            <TitleH2 title="Pourquoi choisir notre entreprise ?" />
            <p className={styleParagraphe + " text-gray-700"}>
              Nous disposons d&apos;un savoir-faire reconnu et
              d&apos;équipements modernes permettant d&apos;intervenir
              rapidement, efficacement et dans le strict respect de la
              réglementation en vigueur.
            </p>
          </section>
          <figure className="w-full md:w-1/3">
            <Image
              src="/images/banners/pose-canalisation.jpg"
              alt="Equipe assainissement"
              className="w-full rounded-xl shadow-md object-cover h-44 md:h-56"
              width={400}
              height={300}
            />
          </figure>
        </AnimatedSection>

        <AnimatedSection className="mx-auto py-10" delay={400}>
          <Button href="/contact" className="">
            Demander un devis
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="bg-[#fbbf24] rounded-2xl shadow-xl p-8">
            <TitleH2 title="Nos zones d'interventions" />
            <p className="text-xl md:text-3xl 2xl:text-4xl text-white font-extrabold">
              Nous intervenons dans de nombreuses communes du Var et des
              Alpes-Maritimes :
            </p>
            <section className="rounded-xl mt-8 animate-fade-in">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map((city, idx) => (
                  <AnimatedSection key={city.slug} delay={500 + idx * 60}>
                    <li>
                      <Link
                        href={`/services/assainissement/${city.slug}`}
                        className="px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:bg-gray-400 transition-colors flex items-center"
                      >
                        Assainissement à {city.name}
                        <span className="ml-2">→</span>
                      </Link>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}

function TitleH2({ title }: { title: string }) {
  return (
    <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-[#fbbf24] mb-2 animate-fade-in">
      {title}
    </h2>
  );
}
