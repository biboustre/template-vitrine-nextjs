'use client';

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
      <section className="container mx-auto py-16 px-4 text-secondary">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold dark:text-white mb-6 text-center"
        >
          À propos de nous
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg dark:text-white max-w-2xl mx-auto text-center"
        >
          Notre équipe accompagne les entreprises dans leur présence digitale
          avec des sites vitrines modernes, performants et adaptés à chaque
          secteur d’activité. Nous mettons l’accent sur la qualité, la
          transparence et la proximité.
        </motion.p>
      </section>
  );
}
