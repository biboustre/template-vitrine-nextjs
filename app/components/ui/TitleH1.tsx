'use client';

import { motion } from "framer-motion"

interface TitleH1Props {
  title: string;
  className?: string;
}

export default function TitleH1({title, className}: TitleH1Props) {
  return (
    <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-5xl font-extrabold mb-10 text-secondary text-center ${className || ''}`}
      >
       {title}
      </motion.h1>
  )
}
