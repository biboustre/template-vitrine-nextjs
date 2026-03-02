export type CitySEO = {
  slug: string;
  name: string;
  department: string;
  terrain: string;
  soil: string;
  constraints: string;
  workTypes: string[];
  lat: number;
  lng: number;
};

export const cities: CitySEO[] = [
  {
    slug: "grasse",
    name: "Grasse",
    department: "Alpes-Maritimes",
    terrain: "terrain en pente avec de nombreuses restanques",
    soil: "sol calcaire typique de l’arrière-pays grassois",
    constraints: "accès parfois étroit, zones résidentielles denses",
    lat: 43.6584,
    lng: 6.9235,
    workTypes: [
      "terrassement pour maisons individuelles",
      "création de plateformes",
      "assainissement autonome",
      "terrassement de piscine",
    ],
  },
  {
    slug: "seranon",
    name: "Séranon",
    department: "Alpes-Maritimes",
    terrain: "terrain montagneux avec dénivelé important",
    soil: "sol rocheux nécessitant un terrassement spécifique",
    constraints: "conditions météo variables, accès parfois difficile",
    lat: 43.9082,
    lng: 6.9017,
    workTypes: [
      "travaux de terrassement en zone rurale",
      "assainissement non collectif",
      "préparation de terrain pour construction",
    ],
  },
  {
    slug: "la-martre",
    name: "La Martre",
    department: "Var",
    terrain: "terrain forestier et accidenté",
    soil: "sol mixte argilo-calcaire",
    constraints: "zones boisées et accès techniques",
    lat: 43.7631,
    lng: 6.6448,
    workTypes: [
      "déblai-remblai",
      "assainissement individuel",
      "aménagement de terrain",
    ],
  },
  {
    slug: "caille",
    name: "Caille",
    department: "Alpes-Maritimes",
    terrain: "terrain montagneux avec relief prononcé",
    soil: "sol rocheux typique du haut pays",
    constraints: "conditions climatiques difficiles, accès étroit",
    lat: 43.8251,
    lng: 6.7028,
    workTypes: [
      "terrassement en zone montagneuse",
      "préparation de terrain pour construction",
      "assainissement individuel",
      "création de plateformes",
    ],
  },
  {
    slug: "escragnolles",
    name: "Escragnolles",
    department: "Alpes-Maritimes",
    terrain: "terrain vallonné et forestier",
    soil: "sol calcaire et argileux",
    constraints: "zones boisées et accès techniques",
    lat: 43.7281,
    lng: 6.8502,
    workTypes: [
      "terrassement pour maisons individuelles",
      "assainissement non collectif",
      "aménagement extérieur",
    ],
  },
  {
    slug: "saint-auban",
    name: "Saint-Auban",
    department: "Alpes-Maritimes",
    terrain: "terrain en pente avec zones rocheuses",
    soil: "sol calcaire dur",
    constraints: "conditions météo variables, accès rural",
    lat: 43.7821,
    lng: 6.8902,
    workTypes: [
      "travaux de terrassement",
      "assainissement individuel",
      "création de chemins d’accès",
    ],
  },
  {
    slug: "valderoure",
    name: "Valderoure",
    department: "Alpes-Maritimes",
    terrain: "terrain montagneux et forestier",
    soil: "sol argilo-calcaire",
    constraints: "zones naturelles sensibles",
    lat: 43.7521,
    lng: 6.8202,
    workTypes: [
      "terrassement de construction",
      "assainissement autonome",
      "aménagement paysager",
    ],
  },
];
