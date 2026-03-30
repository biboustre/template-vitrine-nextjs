"use client";

import ContactForm from "../components/forms/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="container mx-auto py-16 px-4 text-secondary">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0 }}
        className="text-4xl font-bold  mb-6 text-center"
      >
        Contactez-nous
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-lg text-white max-w-2xl mx-auto text-center mb-8"
      >
        Une question, un projet ? Remplissez le formulaire ci-dessous, nous vous
        répondrons rapidement.
      </motion.p>
      <main>
        <ContactForm />
      </main>
    </section>
  );
}
