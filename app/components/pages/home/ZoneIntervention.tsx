import Link from "next/link";
import React from "react";

export default function ZoneIntervention() {
  const links = [
    { href: "/services/terrassement/grasse", label: "Terrassement à Grasse" },
    { href: "/services/terrassement/caille", label: "Terrassement à Caille" },
    {
      href: "/services/terrassement/escragnolles",
      label: "Terrassement à Escragnolles",
    },
    {
      href: "/services/assainissement/grasse",
      label: "Assainissement à Grasse",
    },
    { href: "/services/piscine/grasse", label: "Piscine à Grasse" },
  ];
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary dark:text-white">
        Zone d&apos;intervention
      </h2>

      <p className="text-center max-w-3xl mx-auto">
        Nous intervenons dans tout le secteur de Nice et des Alpes-Maritimes :
        Nice, Grasse, Vence, Carros, La Trinité, Drap, Saint-Laurent-du-Var
        ainsi que dans les villages de l&apos;arrière-pays niçois.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
