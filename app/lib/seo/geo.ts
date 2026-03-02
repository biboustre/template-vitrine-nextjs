export type City = {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  department: string;
};

export const cities: City[] = [
  { name: "Grasse", slug: "grasse", lat: 43.658, lng: 6.926, department: "Alpes-Maritimes" },
  { name: "Séranon", slug: "seranon", lat: 43.836, lng: 6.921, department: "Alpes-Maritimes" },
  { name: "La Martre", slug: "la-martre", lat: 43.965, lng: 6.627, department: "Var" },
  { name: "Caille", slug: "caille", lat: 43.844, lng: 6.913, department: "Alpes-Maritimes" },
  { name: "Escragnolles", slug: "escragnolles", lat: 43.749, lng: 6.920, department: "Alpes-Maritimes" },
  { name: "Saint-Auban", slug: "saint-auban", lat: 43.816, lng: 6.825, department: "Alpes-Maritimes" },
  { name: "Valderoure", slug: "valderoure", lat: 43.784, lng: 6.937, department: "Alpes-Maritimes" },
];


// export const GEO_CENTER = {
//   lat: 43.424,
//   lng: 6.769,
//   city: "Saint-Raphaël",
//   department: "Var",
// };

// export const GEO_RADIUS_KM = 60;

// /** Zone principale */
// export const MAIN_CITIES = [
//   { name: "Saint-auban", slug: "saint-auban", lat: 43.432, lng: 6.735 },
//   { name: "Saint-Raphaël", slug: "saint-raphael", lat: 43.424, lng: 6.769 },
//   { name: "Grasse", slug: "grasse", lat: 43.657, lng: 6.923 },
//   { name: "Draguignan", slug: "draguignan", lat: 43.536, lng: 6.464 },
//   { name: "Cannes", slug: "cannes", lat: 43.552, lng: 7.017 },
//   { name: "Nice", slug: "nice", lat: 43.710, lng: 7.262 },
// ];

// /** Départements couverts */
// export const DEPARTMENTS = [
//   { name: "Var", code: "83" },
//   { name: "Alpes-Maritimes", code: "06" },
// ];