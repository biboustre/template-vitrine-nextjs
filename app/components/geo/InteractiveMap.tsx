"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { cities } from "./citiesData";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function InteractiveMap() {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[43.5, 6.7]}
        zoom={9}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker key={city.slug} position={[city.lat, city.lng]} icon={icon}>
            <Popup>
              <strong>{city.name}</strong>
              <br />
              <Link
                href={`/services/terrassement/${city.slug}`}
                className="text-blue-600 underline"
              >
                Voir nos services
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}