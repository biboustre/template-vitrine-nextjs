"use client";
// import Navbar from "./Navbar";
// import HamburgerMenu from "./HamburgerMenu";
// import DarkModeToggle from "./DarkModeToggle";
// import { Logo } from "../ui/Logo";
import MainMenu from "../navigation/MainMenu";

export default function Header() {
  return (
    <header className="w-full fixed z-20 ">
      {/* <AlertBanner /> */}
      <MainMenu />
    </header>
  );
}
