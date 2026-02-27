"use client";
import { useDarkMode } from "./DarkModeProvider";

function DarkModeToggle() {
  const { isDark, toggleDark } = useDarkMode();
  return (
    <button
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      onClick={toggleDark}
      className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-gray-200 dark:bg-gray-800"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;
