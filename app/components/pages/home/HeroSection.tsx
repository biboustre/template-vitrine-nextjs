"use client";
import { motion } from "framer-motion";
import HeroImages from "./HeroImages";
import Button from "../../ui/Button";
import TitleH2 from "../../ui/TitleH1";

export default function HeroSection() {
  const bgGradient = "bg-gradient-to-r from-primary/10 to-blue-200 dark:from-gray-700 dark:to-gray-900";  
  return (
    <section className={`relative flex flex-col items-center justify-center py-16 px-4 text-center overflow-hidden ${bgGradient}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center justify-center"
      >
        <TitleH2
          className=" md:max-w-5xl mb-12 tracking-tight"
          title="Entreprise de terrassement à Nice et dans les Alpes-Maritimes"
        />
        <p className="text-xl text-white lg:text-2xl dark:text-gray-200 mb-4 max-w-2xl mx-auto">
          TP Terrassement Pro est une entreprise spécialisée dans les travaux de
          terrassement, VRD, assainissement, fondations et terrassement de
          piscines à Nice et dans l&apos;ensemble des Alpes-Maritimes. Nous
          accompagnons les particuliers et professionnels dans tous leurs
          projets de construction, d&apos;aménagement extérieur et de
          préparation de terrain, aussi bien en zone urbaine que dans
          l&apos;arrière-pays niçois.
          <br />
          <span className="text-accent font-semibold">
            Nous intervenons principalement à Nice, Grasse, Vence, Carros, La
            Trinité, Drap, Saint-Laurent-du-Var ainsi que dans l&apos;ensemble
            des villages de l&apos;arrière-pays niçois.
          </span>
        </p>
        <Button href="/contact" className="my-10">
          Demander un devis
        </Button>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
        className="w-full max-w-7xl mx-auto mt-8"
      >
        <HeroImages />
      </motion.section>
    </section>
  );
}
