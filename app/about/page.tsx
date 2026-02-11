"use client";
import { motion } from "framer-motion";
import ValueCard from "../components/ui/ValueCard";
import { FaHardHat, FaLeaf, FaHandshake, FaTools } from "react-icons/fa";
import Button from "../components/ui/Button";

export default function AboutPage() {
  return (
    <main>
      <section className="container mx-auto py-16 px-4 text-secondary">
        <section className="flex flex-col gap-12 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold dark:text-secondary text-center"
          >
            Entreprise de Terrassement : Notre Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg text-white dark:text-white max-w-2xl mx-auto text-center md:text-xl"
          >
            Spécialistes du terrassement depuis plus de 15 ans, nous
            accompagnons particuliers et professionnels dans tous leurs projets
            de préparation de terrain, d&apos;excavation, d&apos;assainissement
            et d&apos;aménagement extérieur. Notre équipe expérimentée
            s&apos;engage à fournir un travail de qualité, dans le respect des
            délais et de l&apos;environnement.
          </motion.p>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <ValueCard
              icon={<FaHardHat />}
              title="Expertise & Savoir-faire"
              description="Des professionnels qualifiés, formés aux dernières techniques de terrassement et d’aménagement."
            />
            <ValueCard
              icon={<FaLeaf />}
              title="Respect de l’environnement"
              description="Des méthodes responsables et des matériaux adaptés pour préserver votre terrain et la nature."
            />
            <ValueCard
              icon={<FaHandshake />}
              title="Accompagnement sur-mesure"
              description="Un interlocuteur unique, à l’écoute de vos besoins, pour un projet clé en main et sans surprise."
            />
            <ValueCard
              icon={<FaTools />}
              title="Matériel moderne"
              description="Un parc d’engins performant pour garantir rapidité, sécurité et qualité d’exécution."
            />
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 text-secondary md:text-4xl">
            Notre mission
          </h2>
          <p className="text-base text-white dark:text-gray-200 mb-2 md:text-lg">
            Offrir à chaque client une solution de terrassement fiable, durable
            et adaptée à son projet, qu&apos;il s&apos;agisse de fondations, de
            nivellement, de tranchées ou d&apos;aménagement paysager.
          </p>
          <p className="text-base text-white dark:text-gray-200">
            Nous intervenons dans le respect des normes, avec une attention
            particulière portée à la sécurité et à la satisfaction client.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 text-secondary md:text-4xl">
            Notre équipe
          </h2>
          <p className="text-base text-white dark:text-gray-200 md:text-lg">
            Notre équipe est composée d&apos;experts passionnés par leur métier,
            alliant rigueur, réactivité et sens du service. Nous croyons en la
            formation continue et à l&apos;innovation pour garantir à nos
            clients les meilleures prestations.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mt-32"
        >
          <h2 className="text-2xl font-bold mb-4 text-secondary md:text-4xl">
            Contactez-nous
          </h2>
          <p className="text-base text-white dark:text-gray-200 mb-6 md:text-lg">
            Vous avez un projet de terrassement ? Besoin d&apos;un conseil ou
            d&apos;un devis gratuit ? Notre équipe est à votre écoute pour
            répondre à toutes vos questions.
          </p>
          <Button href="/contact" aria-label="Aller à la page contact">
            Demander un devis
          </Button>
        </motion.section>
      </section>
    </main>
  );
}
