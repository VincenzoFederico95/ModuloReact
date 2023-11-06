import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const findLocation = () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setLocation({ latitude, longitude });

      setLoading(false);
      setError(null);
    });

    (error) => {
      setError("Unable to retrieve location");
      setLoading(false);
    };
  };
  useEffect(() => findLocation(), []);

  return {
    location,
    error,
    loading,
    findLocation,
  };
};

export default useCurrentLocation; 
