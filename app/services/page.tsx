'use client';

import { motion } from "framer-motion";
import {services} from "@/app/data/services";



export default function ServicesPage() {
  return (
      <section className="container mx-auto py-16 px-4 text-secondary">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Nos services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
            >
              <span className="text-5xl mb-4">{service.icon}</span>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
  );
}
