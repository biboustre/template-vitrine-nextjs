"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { bannerConfig } from "../../config/banner";
import { motion } from "framer-motion";
import Button from "../ui/Button";

// Composant Banner principal
export default function Banner() {
  // Récupère le chemin de la page courante (ex: "/", "/about", etc.)
  const pathname = usePathname();

  // Ici, on récupère la config correspondant à la page courante grâce à pathname.
  // Si aucune config n'existe pour cette page, on prend celle de la page d'accueil ("/").
  const banner = bannerConfig[pathname] || bannerConfig["/"];

  return (
    <section
      className="
        relative w-full
        h-[90vh] min-h-[420px]
        md:h-[70vh] md:min-h-[520px]
        lg:h-[98vh]
      "
    >
      {/* Image de fond dynamique selon la page */}
      <Image
        src={banner.image}
        alt={banner.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

      {/* Contenu animé */}
      <section className="relative z-10 h-full flex items-center">
        <section className="container mx-auto px-4 text-center text-gray-200">
          <motion.h1
            key={pathname + banner.title}
            className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 2xl:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#fbbf24] ">Bienvenue</span> chez <span className="md:text-[#fbbf24]">Bertrand</span> <span className="text-[#fbbf24] md:text-white">Solutions</span> Terrassement
          </motion.h1>
          <motion.p
            key={pathname + banner.subtitle}
            className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl 2xl:text-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {banner.subtitle}
          </motion.p>

          {/*
            Si un bouton d'appel à l'action (cta) est défini dans la config, on l'affiche et on l'anime aussi
          */}
          {banner.cta && (
            <motion.section
              key={pathname + banner.cta.label}
              className="mt-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Button href={banner.cta.href}>{banner.cta.label}</Button>
            </motion.section>
          )}
        </section>
      </section>
    </section>
  );
}
