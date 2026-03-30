"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cities } from "../../data/cities";
import HamburgerMenu from "../layout/HamburgerMenu";

import { FiMail, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { Logo } from "../ui/Logo";

const SERVICES = [
  { key: "terrassement", label: "Terrassement" },
  { key: "assainissement", label: "Assainissement" },
  { key: "piscine", label: "Piscine" },
];

const linksPrincipales = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services/terrassement", label: "Terrassement" },
  { href: "/services/assainissement", label: "Assainissement" },
  { href: "/services/piscine", label: "Piscine" },
  { href: "/zones-d-intervention", label: "Zones d'intervention" },
  { href: "/contact", icon: <FiMail size={18} /> },
];

export default function MainMenu() {
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const threshold = window.innerHeight / 8;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < threshold || y < lastY) setShow(true);
      else if (y > lastY) setShow(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed z-20 bg-[#fbbf24] transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <section className="2xl:max-w-7xl mx-auto px-5 py-4 flex justify-end items-center">
         {/* Logo */}
        {/* <Link
          href="/"
          className="inline-block absolute left-5 xl:top-0 font-bold text-xl"
        >
          <Image
            src="/images/transparent-logo.png"
            alt="Bertrand Solutions Terrassement"
            width={150}
            height={50}
            className="w-[100px] h-[90px] xl:w-[150px] xl:h-[100px]"
          />
        </Link> */}
        <Logo
          src="/images/transparent-logo.png"
          alt="Bertrand Solutions Terrassement"
          width={150}
          height={50}
          classNameImg="w-[100px] h-[90px] xl:w-[150px] xl:h-[100px]"
        />

        {/* Menu principal desktop/tablette */}
        <ul className="hidden xl:flex items-center gap-8">
          {linksPrincipales.map((link) => (
            <li key={link.href} className="list-none">
              <Link href={link.href} className="uppercase font-bold">
                {link.icon && <span className="">{link.icon}</span>}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu hamburger mobile/tablette */}
        <div className=" xl:hidden">
          <HamburgerMenu />
        </div>
      </section>

      <section className="hidden xl:flex justify-end gap-10 pr-5 py-5 border-t border-white 2xl:max-w-7xl mx-auto">
        {SERVICES.map((service) => (
          <li
            key={service.key}
            className="relative list-none"
            onMouseEnter={() => setOpenNav(service.key)}
            onMouseLeave={() => setOpenNav(null)}
          >
            <Link
              href={`/services/${service.key}`}
              className="cursor-pointer uppercase font-bold flex items-center gap-1"
            >
              {service.label}
              <FiChevronDown
                className={`transition-transform duration-200 ${openNav === service.key ? "rotate-180" : "rotate-0"}`}
                size={18}
                aria-label="Afficher le sous-menu"
              />
            </Link>

            {/* Mega menu local SEO */}
            {openNav === service.key && (
              <div className="absolute top-full right-0 bg-white shadow-xl border rounded-lg p-4 w-[360px] grid grid-cols-2 gap-2 z-50">
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

        <li className="list-none">
          <Link href="/paysagiste" className="uppercase font-bold">
            Paysagiste
          </Link>
        </li>
      </section>
    </nav>
  );
}
