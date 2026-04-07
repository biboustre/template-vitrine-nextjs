"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../components/ui/animations/AnimatedSection";

const titleAndDescription = [
  {
    title: "Directeur de la publication",
    description: "Ianis Bertrand, Gérant de Bertrand Solution Terrassement",
  },
  {
    title: "propriété intellectuelle",
    description:
      "Tous les contenus du site (textes, images, graphismes, logos, vidéos, icônes, sons) sont la propriété exclusive de Bertrand Solution Terrassement ou de ses partenaires. Toute reproduction, distribution ou modification est interdite sans accord écrit préalable.",
  },
  {
    title: "Données personnelles",
    description:
      "Bertrand Solution Terrassement s'engage à protéger la vie privée de ses utilisateurs. Les données collectées sont utilisées uniquement pour répondre aux demandes de contact et ne sont jamais transmises à des tiers. Conformément à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant.",
  },
  {
    title: "Responsabilité",
    description:
      "Bertrand Solution Terrassement ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site, ni des dommages indirects consécutifs à l'utilisation du site.",
  },
  {
    title: "Liens hypertextes",
    description:
      "Le site peut contenir des liens vers d'autres sites. Bertrand Solution Terrassement n'est pas responsable du contenu de ces sites. La création de liens vers ce site est autorisée sous réserve de ne pas porter préjudice à son image.",
  },
  {
    title: "Droit applicable et juridiction",
    description:
      "Tout litige relatif à l'utilisation du site est soumis au droit français. Attribution exclusive de juridiction aux tribunaux compétents de Paris.",
  },
];

export default function MentionsLegales() {
  return (
    <main className="min-h-screen py-16 px-4 flex items-center justify-center">
      <AnimatedSection className="w-full max-w-3xl bg-white/90 dark:bg-neutral-900 rounded-2xl shadow-xl p-8 md:p-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl font-extrabold mb-6 text-primary text-center"
        >
          Mentions légales
        </motion.h1>
        <AnimatedSection delay={100}>
          <p className="mb-6 text-base text-gray-700 dark:text-gray-200 text-center">
            Informations légales du site Bertrand Solution Terrassement,
            entreprise spécialisée en terrassement, aménagement de terrain et
            travaux publics en France.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={200} className="space-y-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-2 text-primary">
              Éditeur du site
            </h2>
            <p>
              <strong>Bertrand Solution Terrassement</strong>
              <br />
              SARL au capital de 50 000 €<br />
              Séranon
              <br />
              10 Rue de l&apos;Excavation, 06 420 Séranon
              <br />
              Tél :{" "}
              <a
                href="tel:+33663058565"
                target="_blank"
                rel="noopener noreferrer"
                title="Appeler le numéro de téléphone"
                className="underline hover:text-primary"
              >
                +33 6 63 05 85 65
              </a>
              <br />
              Email :{" "}
              <a
                href="mailto:bertrandsolutionterrassement@gmail.com"
                className="underline hover:text-primary"
                title="Envoyer un email à Bertrand Solution Terrassement"
                aria-label="Aller vers votre boite mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                bertrandsolutionterrassement@gmail.com
              </a>
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <h2 className="text-2xl font-bold mb-2 text-primary">
              Directeur de la publication
            </h2>
            <p>Ianis Bertrand, Gérant de Bertrand Solution Terrassement</p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Hébergeur</h2>
            <p>
              OVH SAS
              <br />
              2 rue Kellermann, 59100 Roubaix, France
              <br />
              Tél :{" "}
              <a
                href="tel:+33972101007"
                className="underline hover:text-primary"
              >
                +33 9 72 10 10 07
              </a>
              <br />
              Email :{" "}
              <a
                href="mailto:contact@ovh.com"
                  title="Envoyer un email à OVH"
                  aria-label="Aller vers votre boite mail"
                  target="_blank"
                  rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                contact@ovh.com
              </a>
            </p>
          </AnimatedSection>
          {titleAndDescription.map((item, index) => (
            <AnimatedSection key={index} delay={300 + index * 100}>
              <h2 className="text-2xl font-bold mb-2 text-primary">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </AnimatedSection>
    </main>
  );
}
