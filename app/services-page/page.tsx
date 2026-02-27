"use client";
import { motion } from "framer-motion";
import { services } from "@/app/data/services";
import ServiceCard from "../components/ui/ServiceCard";
import Button from "../components/ui/Button";
import AdvantageCircle from "../components/ui/AdvantageCircle";

const advantages = [
  "Interventions rapides & respect des délais",
  "Équipe expérimentée & matériel moderne",
  "Garantie décennale sur tous nos travaux",
  "Conseils personnalisés & accompagnement",
  "Respect de l’environnement & des normes",
];

const heroBg =
  "bg-gradient-to-br from-primary/90 via-blue-200/60 to-white dark:from-primary dark:via-neutral-900 dark:to-neutral-950";

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section
        className={`relative overflow-hidden ${heroBg} min-h-[380px] flex flex-col justify-center items-center py-20 px-4 mb-12 gap-5`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-secondary drop-shadow-lg"
        >
          Nos services de terrassement
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-center mb-6 text-white/90"
        >
          Terrassement Pro vous accompagne dans tous vos projets : préparation
          de terrain, excavation, assainissement, aménagement extérieur et
          location d&apos;engins. Expertise, rapidité et respect de
          l&apos;environnement.
        </motion.p>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Button href="/contact">Demander un devis gratuit</Button>
        </motion.section>
      </section>

      {/* SERVICES */}
      <section
        className={`relative overflow-hidden ${heroBg} min-h-[380px] flex flex-col justify-center items-center py-20 px-4 mb-12`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          src="/images/banners/engin-2.jpg"
          alt="Terrassement professionnel"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-[-10]"
        />
      </section>

      {/* AVANTAGES */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-10 max-w-[1500px] mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-16 text-secondary">
            Pourquoi choisir Terrassement Pro ?
          </h2>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-6 text-base dark:text-gray-200">
            {advantages.map((advantage) => (
              <AdvantageCircle key={advantage}>{advantage}</AdvantageCircle>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Button href="/contact">Discutons de votre projet&nbsp;!</Button>
        </motion.div>
      </section>
    </main>
  );
}
