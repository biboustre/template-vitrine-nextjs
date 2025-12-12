'use client';

import ContactForm from "../components/forms/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
      <section className="container mx-auto py-16 px-4 ">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-primary mb-6 text-center"
        >
          Contactez-nous
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-8"
        >
          Une question, un projet ? Remplissez le formulaire ci-dessous, nous
          vous répondrons rapidement.
        </motion.p>
        <ContactForm />
      </section>
  );
}
