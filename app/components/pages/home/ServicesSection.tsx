"use client";
import { motion } from "framer-motion";
import { services } from "@/app/data/services";
import TitleH2 from "../../ui/TitleH2";

export default function ServicesSection() {
  return (
    <section className="relative  w-full py-16 px-4">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-[1400px] mx-auto"
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
            <h3 className="font-semibold text-center text-xl mb-2 text-primary dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          src="/images/banners/engin-2.jpg"
          alt="Terrassement professionnel"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
        />
    </section>
  );
}
