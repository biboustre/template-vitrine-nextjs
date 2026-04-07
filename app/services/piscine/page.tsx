import Link from "next/link";
import Image from "next/image";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";
import Button from "@/app/components/ui/Button";

export const metadata = {
  title:
    "Terrassement piscine – Préparation de terrain | Var & Alpes-Maritimes",
  description:
    "Entreprise spécialisée en terrassement piscine : fouille, excavation, nivellement, réseaux, fondations. Intervention rapide dans le Var et les Alpes-Maritimes.",
};

const breadcrumbs = [{ label: "Piscine", href: "/services/piscine" }];

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
      <div className="flex flex-col gap-8">
        <AnimatedSection delay={0}>
          <figure className="bg-[#fbbf24] rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <Image
              width={400}
              height={300}
              src="/images/banners/piscine.jpg"
              alt="Terrassement piscine"
              className="w-full rounded-xl shadow-lg object-cover h-56 md:h-72"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight animate-fade-in">
                Terrassement piscine – Préparation de terrain dans le Var et les
                Alpes-Maritimes
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                Votre projet piscine clé en main, avec une préparation de
                terrain optimale et un accompagnement expert.
              </p>
            </div>
          </figure>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <TitleH2 title="Pourquoi le terrassement piscine est essentiel ?" />
              <p className={styleParagraphe + " text-gray-700"}>
                Une préparation de terrain rigoureuse permet d&apos;éviter les
                affaissements, infiltrations et désordres structurels. Chaque
                chantier est étudié afin d&apos;adapter la méthode au type de
                sol rencontré.
              </p>
            </div>
            <Image
              width={400}
              height={300}
              src="/images/banners/mini-pelle.jpg"
              alt="Préparation terrain piscine"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-44 md:h-56"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
            <Image
              width={400}
              height={300}
              src="/images/banners/mini-pelle-3.jpg"
              alt="Prestations piscine"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-44 md:h-56 order-2 md:order-1"
            />
            <div className="flex-1 order-1 md:order-2">
              <TitleH2 title="Nos prestations piscine" />
              <ul
                className={`list-disc pl-6 space-y-2 ${styleParagraphe} text-gray-700`}
              >
                <li>Implantation et traçage</li>
                <li>Fouille piscine</li>
                <li>Excavation et déblaiement</li>
                <li>Nivellement du terrain</li>
                <li>Création des réseaux</li>
                <li>Remblaiement et finition</li>
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
              width={400}
              height={300}
              src="/images/banners/mini-pelle-4.jpg"
              alt="Equipe piscine"
              className="w-full rounded-xl shadow-md object-cover h-44 md:h-56"
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
