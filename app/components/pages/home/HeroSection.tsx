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
          className=" md:max-w-5xl mb-12 tracking-tight"
          title="Entreprise de terrassement à Nice et dans les Alpes-Maritimes"
        />
        <AnimatedSection
          delay={200}
          className="text-xl text-white lg:text-2xl dark:text-gray-200 mb-10 max-w-4xl 2xl:max-w-5xl mx-auto"
        >
          Bertrand solutions terrassement est une entreprise spécialisée dans
          les travaux de terrassement, VRD, assainissement, fondations et
          terrassement de piscines à Nice et dans l&apos;ensemble des
          Alpes-Maritimes. Nous accompagnons les particuliers et professionnels
          dans tous leurs projets de construction, d&apos;aménagement extérieur
          et de préparation de terrain, aussi bien en zone urbaine que dans
          l&apos;arrière-pays niçois.
          <br />
          <span className="text-accent font-semibold">
            Nous intervenons principalement à Nice, Grasse, Séranon,
            Escragnolles, Saint-Auban, La Martre, Saint-Laurent-du-Var ainsi que
            dans l&apos;ensemble des villages de l&apos;arrière-pays niçois.
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
      <Button href="/contact" className="my-10 ">
        Demander un devis
      </Button>
    </section>
  );
}
