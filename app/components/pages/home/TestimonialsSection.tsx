"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/app/data/testimonials";
import TitleH2 from "../../ui/TitleH1";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 ">
      <TitleH2 title="Témoignages de nos clients" />
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-[1700px] mx-auto mt-12">
        {testimonials.map((t, idx) => (
          <motion.blockquote
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
            className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl shadow-xl p-8 border-l-4 border-white flex-1"
          >
            <p className="italic text-lg mb-4">“{t.quote}”</p>
            {/* <footer className="text-primary dark:text-white font-semibold">
              {t.name}{" "}
              <span className="text-gray-500 font-normal">({t.company})</span>
            </footer> */}
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
