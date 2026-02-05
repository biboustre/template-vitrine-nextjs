"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/app/data/testimonials";
import TitleH2 from "../../ui/TitleH2";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      <TitleH2 title="Témoignages de nos clients" />
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-[1700px] mx-auto mt-12">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-l-4 border-primary/40 flex-1"
          >
            <p className="italic text-lg mb-4">“{t.quote}”</p>
            <footer className="text-primary dark:text-white font-semibold">
              {t.name}{" "}
              <span className="text-gray-500 font-normal">({t.company})</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
