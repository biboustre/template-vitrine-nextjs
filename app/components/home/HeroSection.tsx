"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
          Agence NovaWeb
        </h1>
        <p className="text-lg md:text-2xl  dark:text-gray-200 mb-8 max-w-2xl mx-auto">
          Nous aidons les entreprises à briller sur le web avec des sites
          modernes, animés et performants.
        </p>
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
          src="/images/hero-illustration.svg"
          alt="Illustration NovaWeb"
          width={400}
          height={300}
          className="rounded-xl shadow-xl border border-primary/10"
          priority
        />
      </motion.figure>
    </section>
  );
}
