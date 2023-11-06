import React, { useEffect } from "react";
import useCurrentLocation from "./useCurrentLocation";

const CurrentLocation = () => {
  const { location, error, loading, findLocation } = useCurrentLocation();

  useEffect(() => {
    findLocation();
  }, []);

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {location && (
        <h3>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </h3>
      )}
      {error && <h3>{error}</h3>}
    </>
  );
};

export default CurrentLocation;