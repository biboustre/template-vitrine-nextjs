'use client';

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative flex items-center justify-center h-[60vh] bg-gray-800">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Bienvenue chez MonEntreprise
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8">
          Votre partenaire pour un site vitrine moderne et performant
        </p>
      </motion.section>
      {/* Animation décorative */}
      <motion.section
        className="absolute inset-0 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-blue-300/20 to-transparent" />
      </motion.section>
    </section>
  );
}
