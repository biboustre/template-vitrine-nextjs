import Link from "next/link";
import { cities } from "../../data/cities";
import ServiceSchema from "@/app/components/seo/ServiceShema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import AnimatedSection from "@/app/components/ui/animations/AnimatedSection";
import Image from "next/image";

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

  const fontSizeParagraphe = "md:text-xl 2xl:text-2xl";

  return (
    <main className="container mx-auto px-4 py-16">
      <BreadcrumbSchema items={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />
      <ServiceSchema
        service="Terrassement"
        city={{ name: "Var & Alpes-Maritimes", department: "PACA" }}
      />
      <div className="flex flex-col gap-8">
        <AnimatedSection delay={0}>
          <div className="bg-[#fbbf24] rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <Image
              width={400}
              height={300}
              src="/images/banners/engin-3.jpg"
              alt="Engin terrassement"
              className="w-full md:w-1/3 rounded-xl shadow-lg object-cover h-56 md:h-72"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight animate-fade-in">
                Entreprise de terrassement – Travaux professionnels dans le Var
                et les Alpes-Maritimes
              </h1>
              <p className="text-lg text-gray-800 font-medium">
                Des solutions sur-mesure pour tous vos projets de terrassement,
                avec un accompagnement de A à Z.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <TitleH2 title="Qu'est-ce que le terrassement ?" />
              <p className={fontSizeParagraphe + " text-gray-700"}>
                Le terrassement consiste à préparer un terrain avant
                construction. Il comprend l&apos;excavation, le nivellement, la
                stabilisation du sol et la création des fondations nécessaires à
                la solidité des ouvrages.
              </p>
            </div>
            <Image
              width={400}
              height={300}
              src="/images/banners/engin-2.jpg"
              alt="Travaux de terrassement"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-44 md:h-56"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
            <Image
              width={400}
              height={300}
              src="/images/banners/engin-3.jpg"
              alt="Prestations terrassement"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-44 md:h-56 order-2 md:order-1"
            />
            <div className="flex-1 order-1 md:order-2">
              <TitleH2 title="Nos prestations de terrassement" />
              <ul
                className={`list-disc pl-6 space-y-2 ${fontSizeParagraphe} text-gray-700`}
              >
                <li>Terrassement pour maison individuelle</li>
                <li>Terrassement piscine</li>
                <li>Travaux de VRD (Voirie et Réseaux Divers)</li>
                <li>Excavation et déblaiement</li>
                <li>Nivellement et mise à niveau du terrain</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <TitleH2 title="Pourquoi choisir notre entreprise ?" />
              <p className={fontSizeParagraphe + " text-gray-700"}>
                Nous disposons d&apos;un matériel professionnel performant et
                d&apos;une équipe expérimentée capable de s&apos;adapter à tous
                types de terrains. Nous garantissons un travail précis, rapide
                et conforme aux normes en vigueur.
              </p>
            </div>
            <Image
              width={400}
              height={300}
              src="/images/banners/engin-1.jpg"
              alt="Equipe professionnelle"
              className="w-full md:w-1/3 rounded-xl shadow-md object-cover h-44 md:h-56"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <section className="bg-[#fbbf24] rounded-2xl shadow-xl p-8">
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
                        href={`/services/terrassement/${city.slug}`}
                        className="block px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:bg-gray-200 transition-colors"
                      >
                        Terrassement à {city.name}
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
    <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-[#fbbf24] mb-2 animate-fade-in">
      {title}
    </h2>
  );
}
