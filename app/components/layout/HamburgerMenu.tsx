"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { cities } from "../../data/cities";

const SERVICES = [
  { key: "terrassement", label: "Terrassement" },
  { key: "assainissement", label: "Assainissement" },
  { key: "piscine", label: "Piscine" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((o) => !o)}
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <span className="sr-only">Menu</span>
        <div className="w-6 h-6 flex flex-col justify-between">
          <span
            className={`block h-1 w-full bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-1 w-full bg-white transition-all ${open ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-1 w-full bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </div>
      </button>
      {open && (
        <nav className="absolute right-4 top-16 bg-white text-[#fbbf24] shadow-lg rounded-lg p-4 z-50 min-w-[220px]">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                className="uppercase font-bold text-gray-700 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Accueil
              </Link>
            </li>
            {SERVICES.map((service) => (
              <li key={service.key} className="relative">
                <button
                  type="button"
                  className="w-full text-left uppercase font-bold text-gray-700 hover:text-primary transition-colors flex items-center justify-between"
                  onClick={() =>
                    setOpenService(
                      openService === service.key ? null : service.key,
                    )
                  }
                  aria-expanded={openService === service.key}
                >
                  {service.label}
                  <span className="ml-2">
                    {openService === service.key ? "▲" : "▼"}
                  </span>
                </button>
                {openService === service.key && (
                  <div className="mt-2 ml-2 bg-white border rounded-lg shadow p-2">
                    <Link
                      href={`/services/${service.key}`}
                      className="block text-sm font-semibold text-[#fbbf24] hover:text-[#c29c3b] py-1"
                      onClick={() => {
                        setOpen(false);
                        setOpenService(null);
                      }}
                    >
                      Tous les services {service.label}
                    </Link>
                    {cities.slice(0, 12).map((city) => (
                      <Link
                        key={city.slug}
                        href={`/services/${service.key}/${city.slug}`}
                        className="block text-sm text-[#fbbf24] hover:text-[#c29c3b] py-1"
                        onClick={() => {
                          setOpen(false);
                          setOpenService(null);
                        }}
                      >
                        {service.label} à {city.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/zones-d-intervention"
                className="uppercase font-bold text-gray-700 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Zones d&apos;intervention
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                aria-label="Contact"
                className="flex items-center gap-2 text-gray-700 font-bold uppercase hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                <FiMail size={22} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
