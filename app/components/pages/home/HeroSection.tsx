"use client";
import { motion } from "framer-motion";
import HeroImages from "./HeroImages";
import Button from "../../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden bg-gradient-to-r from-primary/10 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl text-secondary md:text-6xl font-extrabold dark:text-white drop-shadow mb-4 tracking-tight">
          Terrassement Expert
        </h1>
        <p className="text-xl text-white md:text-2xl dark:text-gray-200 mb-4 max-w-2xl mx-auto">
          Travaux de terrassement, aménagement de terrain et excavation pour
          particuliers et professionnels.
          <br />
          <span className="text-accent font-semibold">
            Intervention rapide dans votre région !
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
