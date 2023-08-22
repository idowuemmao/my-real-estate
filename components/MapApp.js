import React, { useState, useMemo } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

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
  //   const markers = useMemo(
  //     () =>
  //       searchResults.map((result) => (
  //         <div key={result.long}>
  //           <Marker
  //             // key={result.long}
  //             latitude={result.lat}
  //             longitude={result.long}
  //           >
  //             <div
  //               onClick={() => setSelectedLocation(result)}
  //               className="cursor-pointer text-xl animate-bounce"
  //               aria-label="push-pin"
  //             >
  //               📌
  //             </div>
  //           </Marker>
  //           {selectedLocation.long === result.long ? (
  //             <Popup
  //               onClose={() => setSelectedLocation({})}
  //               closeOnClick={true}
  //               latitude={result.lat}
  //               longitude={result.long}
  //             >
  //               {result.title}
  //             </Popup>
  //           ) : (
  //             false
  //           )}
  //         </div>
  //       )),
  //     []
  //   );
  //   console.log(searchResults);
  return (
    <Map
      {...viewState}
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/emmygreat/clldwbzs5010f01pb46ro5s3v"
      style={{ width: "100%", height: "100%" }}
    >
      {/* {markers} */}
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/* The popup that should show if we click on a Marker  */}
          {selectedLocation.lat === result.lat ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="grid place-items-center">
                <p className="font-semibold">{result.title}</p>
                <p>{result.price}</p>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default MapApp;
