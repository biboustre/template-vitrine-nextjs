"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bannerConfig } from "../../config/banner";
import { motion } from "framer-motion";

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
        h-[70vh] min-h-[420px]
        md:h-[70vh] md:min-h-[520px]
        lg:h-[95vh]
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
        <section className="container mx-auto px-4 text-center text-white">
          <motion.h1
            key={pathname + banner.title}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {banner.title}
          </motion.h1>
          <motion.p
            key={pathname + banner.subtitle}
            className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl"
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
              <Link
                href={banner.cta.href}
                className="
                  inline-block
                  bg-accent text-black
                  font-semibold
                  px-8 py-4
                  rounded-xl
                  transition
                  hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-accent
                "
              >
                {banner.cta.label}
              </Link>
            </motion.section>
          )}
        </section>
      </section>
    </section>
  );
}
