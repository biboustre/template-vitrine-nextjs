"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-secondary"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold dark:text-white drop-shadow mb-4 tracking-tight">
          Terrassement Expert
        </h1>
        <p className="text-lg md:text-2xl dark:text-gray-200 mb-4 max-w-2xl mx-auto">
          Travaux de terrassement, aménagement de terrain et excavation pour particuliers et professionnels.<br />
          <span className="text-accent font-semibold">Intervention rapide dans votre région !</span>
        </p>
        <ul className="flex justify-center gap-4 mt-2 mb-6 text-sm text-gray-200">
          <li>Terrassement</li>
          <li>Aménagement</li>
          <li>Excavation</li>
        </ul>
        <Link
          href="/contact"
          className="inline-block bg-accent text-black font-semibold px-8 py-4 rounded-xl mt-2 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Demander un devis
        </Link>
      </motion.section>
      {/* Animation décorative */}
      <motion.section
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-blue-300/20 to-transparent" />
      </motion.section>
      <motion.figure
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
        className="mt-8 flex justify-center"
      >
        <Image
          src="/images/terrassement-hero.jpg"
          alt="Illustration terrassement"
          width={400}
          height={300}
          className="rounded-xl shadow-xl border border-primary/10"
          priority
        />
      </motion.figure>
    </section>
  );
}
