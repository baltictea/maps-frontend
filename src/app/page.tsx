"use client";

import { MapProvider } from "@/components/Map/MapProvider";
import { Map } from "@/components/Map/Map"

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <div className="relative w-full h-[48rem] border-2 border-gray-300">
        <MapProvider>
          <Map />
        </MapProvider>
      </div>
      <footer></footer>
    </main>
  );
}
