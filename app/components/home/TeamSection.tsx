"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "@/app/data/team";

export default function TeamSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-primary dark:text-white text-center"
      >
        Notre équipe
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.18 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40, rotateY: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.15, type: "spring" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-primary/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full mb-4 shadow-lg border-4 border-primary/20"
            />
            <h3 className="font-semibold text-xl mb-1 text-primary dark:text-white">
              {member.name}
            </h3>
            <span className="text-gray-500 dark:text-gray-300 mb-2">
              {member.role}
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
