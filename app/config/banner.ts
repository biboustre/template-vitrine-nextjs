export type BannerConfig = {
  title: string;
  subtitle: string;
  image: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const bannerConfig: Record<string, BannerConfig> = {
  "/": {
    title: "Bienvenue chez Entreprise Dupont",
    subtitle:
      "Artisan de confiance pour tous vos travaux de terrassement et rénovation en région paca",
    image: "/images/banners/engin-3.jpg",
    cta: {
      label: "Demander un devis gratuit",
      href: "/contact",
    },
  },

  "/about": {
    title: "À propos de nous",
    subtitle:
      "Une entreprise familiale avec des valeurs fortes et un savoir-faire reconnu",
    image: "/images/banners/engin-2.jpg",
  },

  "/services": {
    title: "Nos services",
    subtitle: "Des prestations complètes pour particuliers et professionnels",
    image: "/images/banners/engin-1.jpg",
    cta: {
      label: "Voir nos prestations",
      href: "#services",
    },
  },

  "/contact": {
    title: "Besoin d’un renseignement ?",
    subtitle: "Contactez-nous, nous vous répondrons rapidement",
    image: "/images/banners/engin-1.jpg",
  },
};
