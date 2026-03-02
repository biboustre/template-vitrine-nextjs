"use client";

import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { City } from "../geo/citiesData";

type Props = {
  city: City;
};

const icon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function CityMarker({ city }: Props) {
  return (
    <Marker position={[city.lat, city.lng]} icon={icon}>
      <Popup>
        <strong>{city.name}</strong>
        <br />
        {city.department}
      </Popup>
    </Marker>
  );
}