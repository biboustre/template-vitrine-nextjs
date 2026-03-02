import { generateGeoCircleSchema } from "../../lib/seo/schema";

type Props = {
  lat: number;
  lng: number;
  radius?: number;
};

export default function GeoSchema({ lat, lng, radius = 50000 }: Props) {
  const data = generateGeoCircleSchema(lat, lng, radius);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}