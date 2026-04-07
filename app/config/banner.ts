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
    title: "Bienvenue chez Bertrand Solution Terrassement",
    subtitle:
      "Artisan de confiance pour tous vos travaux de terrassement et rénovation en région paca",
    image: "/images/banners/mini-pelle-7.jpg",
    cta: {
      label: "Demander un devis gratuit",
      href: "/contact",
    },
  },

  "/about": {
    title: "À propos de nous",
    subtitle:
      "Une entreprise familiale avec des valeurs fortes et un savoir-faire reconnu",
    image: "/images/banners/mini-pelle-7.jpg",
  },

  // "/services": {
  //   title: "Nos services",
  //   subtitle: "Des prestations complètes pour particuliers et professionnels",
  //   image: "/images/banners/engin-1.jpg",
  //   cta: {
  //     label: "Voir nos prestations",
  //     href: "/services",
  //   },
  // },

  "/contact": {
    title: "Besoin d’un renseignement ?",
    subtitle: "Contactez-nous, nous vous répondrons rapidement",
    image: "/images/banners/mini-pelle-7.jpg",
  },

  "/services/terrassement": {
    title: "Terrassement",
    subtitle:
      "Des travaux de terrassement précis et efficaces pour préparer votre terrain",
    image: "/images/banners/mini-pelle-7.jpg",
  },

  "/services/assainissement": {
    title: "Assainissement",
    subtitle:
      "Des solutions d’assainissement adaptées à vos besoins et à votre budget",
    image: "/images/banners/mini-pelle-7.jpg",
  },

  "/services/piscine": {
    title: "Piscine",
    subtitle:
      "Des piscines sur mesure pour votre jardin et votre confort",
    image: "/images/banners/mini-pelle-7.jpg",
  },

  "/paysagiste": {
    title: "Paysagiste",
    subtitle:
      "Des aménagements paysagers pour votre jardin et votre confort",
    image: "/images/banners/mini-pelle-7.jpg",
  },

};
