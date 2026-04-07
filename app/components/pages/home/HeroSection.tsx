"use client";
import HeroImages from "./HeroImages";
import Button from "../../ui/Button";
import TitleH2 from "../../ui/TitleH1";
import AnimatedSection from "../../ui/animations/AnimatedSection";
import AnimatedAppear from "../../ui/animations/AnimatedAppear";

export default function HeroSection() {
  return (
    <section
      className={`relative flex flex-col items-center justify-center py-16 px-4 text-center overflow-hidden}`}
    >
      <section className="z-10 flex flex-col items-center justify-center">
        <TitleH2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight"
          title="Entreprise de terrassement à Nice et dans les Alpes-Maritimes"
        />

        <AnimatedSection
          delay={200}
          className="text-xl text-gray-200 mb-10 max-w-4xl 2xl:max-w-5xl mx-auto 2xl:text-2xl"
        >
          <span className="font-bold text-[#fbbf24] uppercase">
            Bertrand solution terrassement
          </span>{" "}
          entreprise spécialisée en terrassement, VRD et aménagement paysager
          haut de gamme, nous créons des espaces extérieurs sur mesure alliant
          technicité, esthétisme et durabilité. Nous accompagnons{" "}
          <span className="font-bold text-[#fbbf24] uppercase">
            particuliers
          </span>{" "}
          et{" "}
          <span className="font-bold text-[#fbbf24] uppercase">
            professionnels{" "}
          </span>
          dans tous leurs projets de construction, d&apos;aménagement extérieur
          et de préparation de terrain, aussi bien en zone urbaine que dans
          l&apos;arrière-pays Grassois.
          <br />
          <span className="text-accent font-semibold">
            Nous intervenons principalement à Séranon et dans les villages
            environnants : Caille, Valderoure, Andon, Escragnolles, La Bastide,
            La Martre, Peyroules, Saint-Auban et Mons. Ainsi que dans
            l&apos;ensemble des villages de{" "}
            <span className="font-bold text-[#fbbf24] uppercase">
              l&apos;arrière-pays Grassois
            </span>
            .
          </span>
        </AnimatedSection>
      </section>
      <AnimatedSection
        delay={200}
        className="w-full max-w-7xl mx-auto mt-8"
      >
        <HeroImages />
      </AnimatedSection>
        <AnimatedAppear className="text-xl mt-14 max-w-4xl mx-auto 2xl:text-2xl">
          Terrassement de précision, viabilisation, raccordements réseaux,
          création d&apos;accès et aménagements paysagers élégants, chaque projet est
          étudié sur mesure. Service soigné, respect des délais et devis
          personnalisé.
        </AnimatedAppear>
      <Button href="/contact" className="mt-32 md:mb-10 md:mt-24 ">
        Demander un devis
      </Button>
    </section>
  );
}

// entreprise spécialisée en terrassement, VRD et aménagement paysager haut de gamme, nous créons des espaces extérieurs sur mesure alliant technicité, esthétisme et durabilité. Nous accompagnons particuliers et professionnels à Séranon et dans les villages environnants : Caille, Valderoure, Andon, Escragnolles, La Bastide, La Martre, Peyroules, Saint-Auban et Mons.
// Terrassement de précision, viabilisation, raccordements réseaux, création d’accès et aménagements paysagers élégants, chaque projet est étudié sur mesure. Service soigné, respect des délais et devis personnalisé.
