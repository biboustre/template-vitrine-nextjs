"use client";
import { motion } from "framer-motion";
import { faqs } from "@/app/data/faqs";
import TitleH2 from "../../ui/TitleH2";

export default function FaqSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <TitleH2 title="Questions fréquentes" />
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, idx) => (
          <motion.details
            key={faq.q}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-4 bg-white dark:bg-gray-900 rounded-lg shadow p-4 border border-primary/10"
          >
            <summary className="cursor-pointer font-semibold text-primary dark:text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary">
              {faq.q}
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
