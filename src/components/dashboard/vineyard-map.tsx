"use client";

import { useMemo } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  OverlayView,
} from "@react-google-maps/api";
import {
  generateVineyardPlants,
  VINEYARD_CENTER,
  HEALTH_COLORS,
  type VineyardPlant,
  type HealthStatus,
} from "@/lib/vineyard-data";

const ROWS = 12;
const BASE_PLANTS_PER_ROW = 26;
const MAP_CONTAINER_STYLE = { width: "100%", height: "480px" };
const MAP_OPTIONS = {
  mapTypeId: "satellite",
  tilt: 0,
  zoomControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
  streetViewControl: false,
};

export function VineyardMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
  });

  const plants = useMemo(
    () => generateVineyardPlants(ROWS, BASE_PLANTS_PER_ROW),
    []
  );

  if (loadError) {
    return (
      <MapFallback
        message="Failed to load Google Maps. Enable Maps JavaScript API and check key restrictions (allow localhost)."
      />
    );
  }

  if (!apiKey) {
    return (
      <MapFallback message="Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key to .env.local (restart dev server after)." />
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl border border-stone-200 bg-stone-100">
        <p className="text-stone-600">Loading map…</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-stone-200">
      <GoogleMap
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={VINEYARD_CENTER}
        zoom={19}
        options={MAP_OPTIONS}
      >
        {plants.map((plant) => (
          <PlantOverlay key={plant.id} plant={plant} />
        ))}
      </GoogleMap>
      <Legend />
    </div>
  );
}

function PlantOverlay({ plant }: { plant: VineyardPlant }) {
  const position = { lat: plant.lat, lng: plant.lng };
  const color = HEALTH_COLORS[plant.status];

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
      })}
    >
      <div
        className="cursor-pointer rounded-full transition-transform hover:scale-150 hover:z-10"
        style={{
          width: 8,
          height: 8,
          backgroundColor: color,
          boxShadow: "0 0 0 1px rgba(255,255,255,0.5)",
        }}
        title={`${plant.id} — ${plant.health}%${plant.issues.length ? ` — ${plant.issues.join(", ")}` : ""}`}
      />
    </OverlayView>
  );
}

function Legend() {
  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-lg bg-white/95 px-4 py-2 shadow-sm border border-stone-200">
      <span className="text-xs font-medium text-stone-500">Health</span>
      {(["critical", "poor", "moderate", "good", "excellent"] as HealthStatus[]).map(
        (s) => (
          <div key={s} className="flex items-center gap-1.5">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: HEALTH_COLORS[s] }}
            />
            <span className="text-xs text-stone-600 capitalize">{s}</span>
          </div>
        )
      )}
    </div>
  );
}

function MapFallback({ message }: { message: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-100 aspect-video flex flex-col items-center justify-center gap-4 p-8">
      <p className="text-stone-600 text-center">{message}</p>
      <a
        href="https://console.cloud.google.com/apis/credentials"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#2F473A] underline"
      >
        Get a Google Maps API key
      </a>
      <p className="text-xs text-stone-500">
        Vineyard: 38.2957, -122.4447
      </p>
    </div>
  );
}
