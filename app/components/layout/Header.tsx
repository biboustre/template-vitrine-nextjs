"use client";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import DarkModeToggle from "./DarkModeToggle";
import AlertBanner from "./AlertBanner";

export default function Header() {
  return (
    <header className="w-full">
      <AlertBanner />
      <nav
        aria-label="Navigation principale"
        className="relative flex items-center justify-between w-full bg-white/80 backdrop-blur-md shadow z-50 px-4 md:px-6 py-2"
      >
        <div className="flex items-center gap-4">
          <Navbar />
        </div>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}
