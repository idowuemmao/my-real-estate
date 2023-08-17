import { useState } from "react";
import Map from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const MyMap = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  const handleViewportChange = (nextViewport) => {
    console.log("handleViewportChange called with:", nextViewport);
    setViewport(nextViewport);
  };
  return (
    <Map
      mapStyle="mapbox://styles/emmygreat/clldwbzs5010f01pb46ro5s3v"
      mapboxAccessToken={process.env.mapbox_key}
      //   {...viewport} //spread operator
      initialViewState={{
        width: "100%",
        height: "100%",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
      }}
      onViewportChange={handleViewportChange}
    ></Map>
  );
};

export default MyMap;
