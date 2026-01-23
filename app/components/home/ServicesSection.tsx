"use client";
import { motion } from "framer-motion";
import { services } from "@/app/data/services";
import TitleH2 from "../ui/TitleH2";

export default function ServicesSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <TitleH2 title="Nos services" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-primary/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <span className="text-5xl mb-4">{service.icon}</span>
            <h3 className="font-semibold text-xl mb-2 text-primary dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
