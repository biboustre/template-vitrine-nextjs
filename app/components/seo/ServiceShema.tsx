type Props = {
  service: string;
  city: {
    name: string;
    department: string;
  };
};

export default function ServiceSchema({ service, city }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.tp-terrassement-pro.fr/#business",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressCountry: "FR",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}