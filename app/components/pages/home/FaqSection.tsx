"use client";
import { motion } from "framer-motion";
import { faqs } from "@/app/data/faqs";
import TitleH2 from "../../ui/TitleH1";
import Image from "next/image";

export default function FaqSection() {
  const bgGradient = "bg-gradient-to-r from-gray-500 to-gray-700/50";

  return (
    <section className="relative mx-auto py-16 px-4 h-auto overflow-hidden">
      <Image
        src="/images/banners/mini-pelle.jpg"
        alt="Questions fréquentes"
        width={600}
        height={400}
        className="w-full rounded-lg shadow absolute -z-10 top-0 left-0 opacity- object-cover h-full"
      />

      <TitleH2 title="Questions fréquentes" />
      <div className="max-w-2xl mx-auto mt-12">
        {faqs.map((faq, idx) => (
          <motion.details
            key={faq.q}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`mb-4 rounded-lg shadow p-4 border border-primary/10 ${bgGradient}`}
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
