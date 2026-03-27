// export const testimonials = [
//   {
//     quote:
//       "Travail de terrassement impeccable pour la construction de notre maison. Terrain parfaitement nivelé, chantier propre et délais respectés. Je recommande vivement !",
//     // name: "Jean Dupont",
//     // company: "Particulier à Saint-Étienne",
//   },
//   {
//     quote:
//       "Entreprise sérieuse pour l’aménagement de notre parking et l’installation du drainage. Équipe professionnelle, à l’écoute et matériel moderne.",
//     // name: "Claire Leroy",
//     // company: "Gérante, Leroy Transports",
//   },
//   {
//     quote:
//       "Nous avons fait appel à eux pour la pose de notre fosse septique et le terrassement du jardin. Résultat parfait, conseils avisés et prix compétitifs.",
//     // name: "Marc Petit",
//     // company: "Propriétaire à Montbrison",
//   },
// ];






export type TestimonialCategory = "terrassement" | "paysagiste";

export interface Testimonial {
  author: string;
  content: string;
  category: TestimonialCategory;
}

export const testimonials: Testimonial[] = [
  {
    author: "Jean Dupont",
    content:
      "Travail de terrassement impeccable pour la construction de notre maison. Terrain parfaitement nivelé, chantier propre et délais respectés. Je recommande vivement !",
    category: "terrassement",
  },
  {
    author: "Claire Leroy",
    content:
      "Entreprise sérieuse pour l’aménagement de notre parking et l’installation du drainage. Équipe professionnelle, à l’écoute et matériel moderne.",
    category: "terrassement",
  },
  {
    author: "Marc Petit",
    content:
      "Nous avons fait appel à eux pour la pose de notre fosse septique et le terrassement du jardin. Résultat parfait, conseils avisés et prix compétitifs.",
    category: "terrassement",
  },
  {
    author: "Sophie Bernard",
    content: "Création de jardin très réussie, à l'écoute de nos envies.",
    category: "paysagiste",
  },
  {
    author: "Marie Martin",
    content: "Le résultat paysager est magnifique, je recommande vivement !",
    category: "paysagiste",
  },
  {
    author: "Paul Durand",
    content: "Aménagement extérieur de qualité, équipe professionnelle et réactive.",
    category: "paysagiste",
  }
];
