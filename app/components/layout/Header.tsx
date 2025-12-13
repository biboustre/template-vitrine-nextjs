"use client";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import DarkModeToggle from "./DarkModeToggle";
import AlertBanner from "./AlertBanner";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <AlertBanner />
      <nav
        aria-label="Navigation principale"
        className="relative flex items-center justify-between w-full bg-white/80 backdrop-blur-md shadow z-50 px-4 md:px-6 py-2"
      >
        <section>
          <Link href="/" className="text-2xl font-bold text-primary">
            NovaWeb
          </Link>
        </section>
        <Navbar />
        <section className="flex items-center gap-2">
          <DarkModeToggle />
          <HamburgerMenu />
        </section>
      </nav>
    </header>
  );
}
