import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05,  transition: { duration: 0.2 } }}
      transition={{ duration: 0.7 }}
      className="bg-slate-200 dark:bg-neutral-800 rounded-lg shadow p-6 flex flex-col items-center hover:shadow-xl transition-shadow hover:scale-90 cursor-pointer"
    >
      <span className="text-5xl mb-4 text-primary">{icon}</span>
      <h3 className="font-semibold text-xl mb-2 text-secondary dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center text-base">
        {description}
      </p>
    </motion.article>
  );
}
