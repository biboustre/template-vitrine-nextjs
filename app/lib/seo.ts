import { CitySEO } from "../data/cities";

export function generateServiceText(
  service: "terrassement" | "assainissement" | "piscine",
  city: CitySEO,
): string {
  if (service === "terrassement") {
    return `
Nous réalisons tous vos travaux de terrassement à ${city.name} et dans les communes environnantes.

Notre expertise du ${city.terrain} et du ${city.soil} nous permet d’adapter nos méthodes aux contraintes locales telles que ${city.constraints}.

Nous intervenons pour :
${city.workTypes.map((w) => `- ${w}`).join("\n")}

Chaque chantier est réalisé dans le respect des normes, avec un souci permanent de qualité, de sécurité et de durabilité.
    `.trim();
  }

  if (service === "assainissement") {
    return `
Nous réalisons tous vos travaux d’assainissement à ${city.name} et dans les communes environnantes.
Notre expertise nous permet d’intervenir efficacement sur ${city.terrain}, avec une parfaite connaissance du ${city.soil}.

Nous prenons en compte les contraintes spécifiques telles que ${city.constraints} afin de garantir une installation fiable, durable et conforme aux normes en vigueur.

Nos prestations incluent notamment :
${city.workTypes.map((w) => `- ${w}`).join("\n")}

Chaque projet est étudié avec soin afin d’assurer un fonctionnement optimal de votre installation d’assainissement.
    `.trim();
  }

  if (service === "piscine") {
    return `
Nous réalisons le terrassement de piscine à ${city.name} avec une approche sur-mesure.

Le ${city.terrain} et la nature du ${city.soil} nécessitent une étude précise afin d’assurer la stabilité du bassin.

Nous adaptons nos méthodes aux contraintes locales telles que ${city.constraints}.

Nos équipes interviennent pour :
${city.workTypes.map((w) => `- ${w}`).join("\n")}

Chaque projet piscine est conçu pour garantir longévité, sécurité et esthétisme.
    `.trim();
  }

  return "";
}

// export function generateServiceText(
//   service: "assainissement" | "piscine",
//   city: CitySEO,
// ): string {
//   if (service === "assainissement") {
//     return `
// Nous réalisons tous vos travaux d’assainissement à ${city.name} et dans les communes environnantes.
// Notre expertise nous permet d’intervenir efficacement sur ${city.terrain}, avec une parfaite connaissance du ${city.soil}.

// Nous prenons en compte les contraintes spécifiques telles que ${city.constraints} afin de garantir une installation fiable, durable et conforme aux normes en vigueur.

// Nos prestations incluent notamment :
// ${city.workTypes.map((w) => `- ${w}`).join("\n")}

// Chaque projet est étudié avec soin afin d’assurer un fonctionnement optimal de votre installation d’assainissement.
//     `.trim();
//   }

//   if (service === "piscine") {
//     return `
// Nous réalisons le terrassement de piscine à ${city.name} avec une approche sur-mesure.
// Le ${city.terrain} et la nature du ${city.soil} nécessitent une étude précise afin d’assurer la stabilité du bassin.

// Nous adaptons nos méthodes aux contraintes locales telles que ${city.constraints} afin de garantir un terrassement précis, sécurisé et durable.

// Nos équipes interviennent pour :
// ${city.workTypes.map((w) => `- ${w}`).join("\n")}

// Chaque projet piscine est conçu pour garantir longévité, sécurité et esthétisme.
//     `.trim();
//   }
//   return "";
// }
