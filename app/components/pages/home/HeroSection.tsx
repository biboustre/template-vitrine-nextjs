"use client";
import { motion } from "framer-motion";
import HeroImages from "./HeroImages";
import Button from "../../ui/Button";
import TitleH2 from "../../ui/TitleH1";
import AnimatedSection from "../../ui/animations/AnimatedSection";

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
            Bertrand solutions terrassement
          </span>{" "}
          est une entreprise spécialisée dans les travaux de terrassement, VRD,
          assainissement, fondations et terrassement de piscines à Nice et dans
          l&apos;ensemble des Alpes-Maritimes. Nous accompagnons les{" "}
          <span className="font-bold text-[#fbbf24] uppercase">
            particuliers
          </span>{" "}
          et{" "}
          <span className="font-bold text-[#fbbf24] uppercase">
            professionnels{" "}
          </span>
          dans tous leurs projets de construction, d&apos;aménagement extérieur
          et de préparation de terrain, aussi bien en zone urbaine que dans
          l&apos;arrière-pays niçois.
          <br />
          <span className="text-accent font-semibold">
            Nous intervenons principalement à Nice, Grasse, Séranon,
            Escragnolles, Saint-Auban, La Martre, Saint-Laurent-du-Var ainsi que
            dans l&apos;ensemble des villages de <span className="font-bold text-[#fbbf24] uppercase">l&apos;arrière-pays niçois</span>.
          </span>
        </AnimatedSection>
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
        className="w-full max-w-7xl mx-auto mt-8"
      >
        <HeroImages />
      </motion.section>
      <Button href="/contact" className="mt-32 md:my-10 ">
        Demander un devis
      </Button>
    </section>
  );
}
