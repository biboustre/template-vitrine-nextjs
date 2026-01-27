"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/app/data/clients";

export default function ClientsSection() {
  return (
    <section className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-8 opacity-80"
      >
        {clients.map((logo, idx) => (
          <motion.div
            key={logo}
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <Image
              src={logo}
              alt={`Client ${idx + 1}`}
              width={100}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
