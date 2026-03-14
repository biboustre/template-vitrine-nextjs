import Link from "next/link";
import React from "react";
import TitleH1 from "../../ui/TitleH1";
import AnimatedSection from "../../ui/animations/AnimatedSection";

export default function ZoneIntervention() {
  const links = [
    { href: "/services/terrassement/grasse", label: "Terrassement à Grasse" },
    { href: "/services/terrassement/caille", label: "Terrassement à Caille" },
    {
      href: "/services/terrassement/saint-auban",
      label: "Terrassement à Saint-Auban",
    },
    {
      href: "/services/terrassement/valderoure",
      label: "Terrassement à Valderoure",
    },
    { href: "/services/terrassement/seranon", label: "Terrassement à Seranon" },
    {
      href: "/services/terrassement/escragnolles",
      label: "Terrassement à Escragnolles",
    },
    {
      href: "/services/assainissement/grasse",
      label: "Assainissement à Grasse",
    },
    {
      href: "/services/assainissement/caille",
      label: "Assainissement à Caille",
    },
    {
      href: "/services/assainissement/saint-auban",
      label: "Assainissement à Saint-Auban",
    },
    {
      href: "/services/assainissement/valderoure",
      label: "Assainissement à Valderoure",
    },
    {
      href: "/services/assainissement/seranon",
      label: "Assainissement à Seranon",
    },
    {
      href: "/services/assainissement/escragnolles",
      label: "Assainissement à Escragnolles",
    },
    { href: "/services/piscine/grasse", label: "Piscine à Grasse" },
    { href: "/services/piscine/caille", label: "Piscine à Caille" },
    { href: "/services/piscine/saint-auban", label: "Piscine à Saint-Auban" },
    { href: "/services/piscine/valderoure", label: "Piscine à Valderoure" },
    { href: "/services/piscine/seranon", label: "Piscine à Seranon" },
    {
      href: "/services/piscine/escragnolles",
      label: "Piscine à Escragnolles",
    },
  ];

  const bgGradient =
    "bg-gradient-to-r from-primary/10 to-blue-200 dark:from-gray-900 dark:to-gray-700";

  return (
    <section
      className={`flex flex-col items-center gap-6 py-16 px-4 ${bgGradient}`}
    >
      <TitleH1 className="text-center" title="Zone d'intervention" />
      <AnimatedSection
        delay={200}
        className="text-xl text-center mb-6 max-w-3xl mx-auto 2xl:text-2xl"
      >
        Nous intervenons dans le secteur des Alpes-Maritimes et du Var : Nice,
        Grasse, Canne, Carros, Seranon, Saint-Laurent-du-Var ainsi que dans les
        villages de l&apos;arrière-pays niçois.
      </AnimatedSection>

      <AnimatedSection delay={400} className="flex flex-wrap justify-center gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 bg-[#f3b926] text-white rounded hover:bg-primary-dark transition hover:scale-90 duration-300"
          >
            {link.label}
          </Link>
        ))}
      </AnimatedSection>
    </section>
  );
}
