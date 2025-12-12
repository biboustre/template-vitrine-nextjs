'use client';

import { useState } from "react";

export default function AlertBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div
      role="alert"
      aria-live="polite"
      className="w-full bg-yellow-400 text-black text-center py-2 px-4 font-medium flex items-center justify-center gap-2"
    >
      <span>
        🚧 Ce site est un template vitrine Next.js/Tailwind/Framer Motion.
      </span>
      <button
        aria-label="Fermer la bannière d'alerte"
        onClick={() => setVisible(false)}
        className="ml-4 px-2 py-1 rounded bg-black/10 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-black"
      >
        ✕
      </button>
    </div>
  );
}
