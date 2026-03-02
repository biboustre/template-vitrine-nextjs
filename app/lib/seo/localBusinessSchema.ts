export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.tp-terrassement-pro.fr/#business",
    name: "TP Terrassement Pro",
    url: "https://www.tp-terrassement-pro.fr",
    telephone: "+33XXXXXXXXX",
    image: "https://www.tp-terrassement-pro.fr/images/og-terrassement.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Raphaël",
      postalCode: "83700",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.4233,
      longitude: 6.7733,
    },
  };
}