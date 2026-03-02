type Props = {
  service: string;
  description?: string;
  city: {
    name: string;
    department: string;
  };
  geo?: {
    lat: number;
    lng: number;
    radiusKm: number;
  };
};

export default function ServiceSchema({
  service,
  description,
  city,
  geo,
}: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.tp-terrassement-pro.fr/#service-${service
      .toLowerCase()
      .replace(/\s+/g, "-" )}`,

    name: service,
    description:
      description ||
      `Service professionnel de ${service.toLowerCase()} à ${city.name} et dans tout le ${city.department}.`,

    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.tp-terrassement-pro.fr/#business",
    },

  areaServed: [
    {
      "@type": "City",
      name: city.name,
    },
    {
      "@type": "AdministrativeArea",
      name: city.department,
    },
  ] as Record<string, unknown>[],

    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressCountry: "FR",
        },
      },
      availableLanguage: ["French"],
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Prestations de ${service}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        },
      ],
    },
  };

  if (geo) {
    data.areaServed.push({
  "@type": "GeoCircle",
  geoMidpoint: {
    "@type": "GeoCoordinates",
    latitude: geo.lat,
    longitude: geo.lng,
  },
  geoRadius: geo.radiusKm * 1000,
});
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}









// type Props = {
//   service: string;
//   city: {
//     name: string;
//     department: string;
//   };
// };

// export default function ServiceSchema({ service, city }: Props) {
//   const data = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     serviceType: service,
//     provider: {
//       "@type": "LocalBusiness",
//       "@id": "https://www.tp-terrassement-pro.fr/#business",
//     },
//     areaServed: {
//       "@type": "City",
//       name: city.name,
//       address: {
//         "@type": "PostalAddress",
//         addressLocality: city.name,
//         addressCountry: "FR",
//       },
//     },
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
//     />
//   );
// }