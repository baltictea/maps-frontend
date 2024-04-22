"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import Script from "next/script";
import { ReactifiedModule } from "@yandex/ymaps3-types/reactify";

export type YMaps = ReactifiedModule<
  typeof import("@yandex/ymaps3-types")
>;

export type Hint = ReactifiedModule<
  typeof import("@yandex/ymaps3-types/packages/hint")
>;

type YMapsContextType = {
  ymaps: YMaps | null;
  hint: Hint | null;
};

export const YMapsContext = createContext<YMapsContextType>({
  ymaps: null,
  hint: null,
});

export const MapProvider: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const [ymaps, setYMaps] = useState<YMaps | null>(null);
  const [hint, setHint] = useState<Hint | null>(null);

  const contextValue = useMemo(() => ({ ymaps, hint }), [ymaps, hint]);

  return <YMapsContext.Provider value={contextValue}>
    <Script
      src={"https://api-maps.yandex.ru/v3/?apikey=116d2175-bc79-4726-88e7-336441f422a3&lang=ru_RU"}
      onLoad={async () => {
        const [ymaps3React] = await Promise.all([
          ymaps3.import("@yandex/ymaps3-reactify"),
          ymaps3.ready,
        ]);
        
        const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
        setYMaps(reactify.module(ymaps3));
        setHint(reactify.module(await ymaps3.import('@yandex/ymaps3-hint@0.0.1')));
      }}
    />
    {props.children}
  </YMapsContext.Provider>
};

export const useMapsAPI = () => useContext(YMapsContext);