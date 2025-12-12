"use client";
import { useContext } from "react";
import { DarkModeContext } from "../../layout";

export default function DarkModeToggle() {
  const { dark, setDark } = useContext(DarkModeContext);
  return (
    <button
      aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
      onClick={() => setDark((d) => !d)}
      className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-gray-200 dark:bg-gray-800"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
