"use client";

import Link from "next/link";
import { useState } from "react";
import { cities } from "../../data/cities";
import HamburgerMenu from "../layout/HamburgerMenu";

import { FiMail } from "react-icons/fi";

const SERVICES = [
  { key: "terrassement", label: "Terrassement" },
  { key: "assainissement", label: "Assainissement" },
  { key: "piscine", label: "Piscine" },
];

export default function MainMenu() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <nav className="w-full fixed z-20 bg-[#fbbf24] bg-opacity-90">
      <section className="2xl:max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          TP & Assainissement
        </Link>

        {/* Menu principal desktop/tablette */}
        <ul className="hidden lg:flex gap-8 items-center">
          <li>
            <Link href="/" className="uppercase font-bold">
              Accueil
            </Link>
          </li>

          {SERVICES.map((service) => (
            <li
              key={service.key}
              className="relative"
              onMouseEnter={() => setOpenService(service.key)}
              onMouseLeave={() => setOpenService(null)}
            >
              <Link
                href={`/services/${service.key}`}
                className="cursor-pointer uppercase font-bold"
              >
                {service.label}
              </Link>

              {/* Mega menu local SEO */}
              {openService === service.key && (
                <div className="absolute top-full left-0 bg-white shadow-xl border rounded-lg p-4 w-[360px] grid grid-cols-2 gap-2 z-50">
                  {cities.slice(0, 12).map((city) => (
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
            <Link href="/zones-d-intervention" className="uppercase font-bold">
              Zones d&apos;intervention
            </Link>
          </li>

          <li>
            <Link href="/contact" aria-label="Contact">
              <FiMail size={22} />
            </Link>
          </li>
        </ul>

        {/* Menu hamburger mobile/tablette */}
        <div className="block lg:hidden">
          <HamburgerMenu />
        </div>
      </section>
    </nav>
  );
}
