'use client';

import { motion } from "framer-motion"

interface TitleH2Props {
  title: string;
}

export default function TitleH2({title}: TitleH2Props) {
  return (
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold mb-10 text-secondary dark:text-white text-center"
      >
       {title}
      </motion.h2>
  )
}
