import React from 'react';
import { YMaps as YandexMapContext, Map as YandexMap } from 'react-yandex-maps';
import { MapProps } from "./models";
import "./styled.scss";
import Mark from "./mark";

const Map = ({ towns, setCity }: MapProps) => {
  return (
    <YandexMapContext query={{ lang: "en_US" }}>
      <YandexMap
        className="map-container"
        defaultState={{ center: [42.75, 25.5], zoom: 7, controls: [], behaviors: [], type: 'yandex#hybrid' }}>
        {towns.map((town, i) => <Mark key={i} town={town} setCity={setCity} />)}
      </YandexMap>
    </YandexMapContext>
  )
}
export default Map;
