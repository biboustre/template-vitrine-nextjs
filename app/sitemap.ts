import type { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://bertrandsolutionterrassement.fr";

  // const pages = [
  //   "",
  //   "/contact",
  //   "/about",
  //   "/zones-d-intervention",
  //   "/terrassement",
  //   "/assainissement",
  //   "/piscine",

  //   "/terrassement/grasse",
  //   "/terrassement/seranon",
  //   "/terrassement/nice",
  //   "/terrassement/caille",
  //   "/terrassement/escragnolles",
  //   "/terrassement/saint-auban",
  //   "/terrassement/valderoure",
  //   "/terrassement/la-martre",

  //   "/assainissement/grasse",
  //   "/assainissement/seranon",
  //   "/assainissement/nice",
  //   "/assainissement/caille",
  //   "/assainissement/escragnolles",
  //   "/assainissement/saint-auban",
  //   "/assainissement/valderoure",
  //   "/assainissement/la-martre",


  //   "/piscine/grasse",
  //   "/piscine/seranon",
  //   "/piscine/nice",
  //   "/piscine/caille",
  //   "/piscine/escragnolles",
  //   "/piscine/saint-auban",
  //   "/piscine/valderoure",
  //   "/piscine/la-martre",

  // ];

//   return pages.map((page) => ({
//     url: `${baseUrl}${page}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly",
//     priority: page === "" ? 1 : 0.8,
//   }));
// }



export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bertrandsolutionterrassement.fr";

  const criticalPages = ["", "/about", "/contact", "/zones-d-intervention"];
  const pillarPages = ["/services/terrassement", "/services/assainissement", "/services/piscine", "/paysagiste"];
  const localPages = [
    "/services/terrassement/grasse",
    "/services/terrassement/seranon",
    "/services/terrassement/nice",
    "/services/terrassement/caille",
    "/services/terrassement/escragnolles",
    "/services/terrassement/saint-auban",
    "/services/terrassement/valderoure",
    "/services/terrassement/la-martre",
    "/services/assainissement/grasse",
    "/services/assainissement/seranon",
    "/services/assainissement/nice",
    "/services/assainissement/caille",
    "/services/assainissement/escragnolles",
    "/services/assainissement/saint-auban",
    "/services/assainissement/valderoure",
    "/services/assainissement/la-martre",
    "/services/piscine/grasse",
    "/services/piscine/seranon",
    "/services/piscine/nice",
    "/services/piscine/caille",
    "/services/piscine/escragnolles",
    "/services/piscine/saint-auban",
    "/services/piscine/valderoure",
    "/services/piscine/la-martre",
  ];
  // const secondaryPages = ["/realisations", "/services"];

  const allPages = [
    ...criticalPages,
    ...pillarPages,
    ...localPages,
    // ...secondaryPages,
  ];

  return allPages.map((page) => {
    let priority = 0.7;

    if (criticalPages.includes(page)) priority = 1.0;
    else if (pillarPages.includes(page)) priority = 0.9;
    else if (localPages.includes(page)) priority = 0.8;
    // else if (secondaryPages.includes(page)) priority = 0.7;

    return {
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority,
    };
  });
}