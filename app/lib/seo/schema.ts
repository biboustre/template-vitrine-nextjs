export function generateGeoCircleSchema(lat: number, lng: number, radius = 50000) {
  return {
    "@context": "https://schema.org",
    "@type": "GeoShape",
    "circle": `${lat} ${lng} ${radius}`,
  };
}

// Oui, je souhaite que l'on connecte tout ça ensemble. Donc, on reste concentré, tu restes concentré, tu ne t'éparpilles pas. On reste concentré. Je souhaite que tu connectes tout ça ensemble pour pouvoir avoir un système SEO local complet et cohérent, complet et cohérent, donc ne t'éparpille pas.