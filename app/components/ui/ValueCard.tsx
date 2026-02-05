import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({
  icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center bg-white dark:bg-gray-600 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
    >
      <div className="text-4xl mb-3 text-primary">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-secondary dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </motion.article>
  );
}
