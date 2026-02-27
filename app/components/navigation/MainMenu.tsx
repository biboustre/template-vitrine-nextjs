"use client";

import Link from "next/link";
import { useState } from "react";
import { cities } from "../../data/cities";

const SERVICES = [
  { key: "terrassement", label: "Terrassement" },
  { key: "assainissement", label: "Assainissement" },
  { key: "piscine", label: "Piscine" },
];

export default function MainMenu() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <nav className=" w-full fixed z-20 bg-[#fbbf24] bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-black">
          TP & Assainissement
        </Link>

        {/* Menu principal */}
        <ul className="flex gap-8 items-center">

          <li>
            <Link href="/">Accueil</Link>
          </li>

          {SERVICES.map(service => (
            <li
              key={service.key}
              className="relative"
              onMouseEnter={() => setOpenService(service.key)}
              onMouseLeave={() => setOpenService(null)}
            >
              <span className="cursor-pointer">
                {service.label}
              </span>

              {/* Mega menu local SEO */}
              {openService === service.key && (
                <div className="absolute top-full left-0 bg-white shadow-xl border rounded-lg p-4 w-[360px] grid grid-cols-2 gap-2 z-50">

                  {cities.slice(0, 12).map(city => (
                    <Link
                      key={city.slug}
                      href={`/services/${service.key}/${city.slug}`}
                      className="text-sm text-[#fbbf24] hover:text-[#c29c3b]"
                    >
                      {service.label} à {city.name}
                    </Link>
                  ))}

                </div>
              )}
            </li>
          ))}

          <li>
            <Link href="/zones">Zones d&apos;intervention</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}