"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    if (map && typeof map.flyTo === 'function') {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [center, zoom, map]);
  return null;
}

export default function MarketingMap({ activeCountry, countries, activeZoom }: any) {
  return (
    <MapContainer
      center={[activeCountry.lat, activeCountry.lng]}
      zoom={activeZoom}
      style={{ height: "100%", width: "100%", background: "#e5e7eb" }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countries.map((country: any) => (
        <Marker key={country.name} position={[country.lat, country.lng]}>
          <Popup>
            <div className="font-bold text-[#1A3D8F]">{country.name}</div>
            <div className="text-xs text-gray-500">Major Market</div>
          </Popup>
        </Marker>
      ))}
      <MapController
        center={[activeCountry.lat, activeCountry.lng]}
        zoom={activeZoom}
      />
    </MapContainer>
  );
}
