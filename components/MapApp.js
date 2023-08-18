import React, { useState, useMemo } from "react";
import Map, { Marker } from "react-map-gl";
// import { getCenter } from "geolib";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";
// import pin from "./pinico.ico";

const MapApp = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });
  const markers = useMemo(
    () =>
      coordinates.map((result) => (
        <Marker
          key={result.longitude}
          latitude={result.latitude}
          longitude={result.longitude}
        >
          <div
            onClick={() => setSelectedLocation(result)}
            className="cursor-pointer text-xl animate-bounce"
          >
            📌
          </div>
        </Marker>
      )),
    [coordinates]
  );

  return (
    <Map
      {...viewState}
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/emmygreat/clldwbzs5010f01pb46ro5s3v"
      style={{ width: "100%", height: "100%" }}
    >
      {markers}
    </Map>
  );
};

export default MapApp;
