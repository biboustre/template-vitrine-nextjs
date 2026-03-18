"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { cities } from "./citiesData";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function InteractiveMap() {



  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg z-[0]">
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
