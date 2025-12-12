'use client';

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
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
            className={`block h-0.5 w-full bg-gray-800 transition-all ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-all ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-all ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>
      {open && (
        <nav className="absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4 z-50">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
