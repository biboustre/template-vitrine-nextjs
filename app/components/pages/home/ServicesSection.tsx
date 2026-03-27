"use client";
import { motion } from "framer-motion";
import { services } from "@/app/data/services";
import TitleH2 from "../../ui/TitleH1";
import AnimatedAppear from "@/app/components/ui/animations/AnimatedAppear";

export default function ServicesSection() {
  return (
    <section className="relative  w-full py-16 px-4">
      <TitleH2 title="Nos services de terrassement à Nice et alentours" />
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
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 max-w-[1400px] mx-auto"
      >
        {services.map((service, idx) => (
          <AnimatedAppear key={service.icon} delay={idx * 150} className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-primary/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            
          
            <span className="text-5xl mb-4">{service.icon}</span>
            <h3 className="font-semibold text-center text-xl mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-white text-center">
              {service.description}
            </p>
          </AnimatedAppear>
        ))}
      </motion.div>
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        src="/images/banners/mini-pelle-5.jpg"
        alt="Terrassement professionnel"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-[-10]"
      />
    </section>
  );
}
