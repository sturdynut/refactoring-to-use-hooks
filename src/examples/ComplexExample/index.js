import { useEffect, useRef, useState } from "react";
import { getWeather, getAirPollution } from "../../api";

export const ComplexExample = () => {
  const isMounted = useRef(true);
  const [weatherPattern, setWeatherPattern] = useState([]);
  const [airPollution, setAirPollution] = useState([]);

  useEffect(() => {
    getWeather().then(
      (response) => isMounted.current && setWeatherPattern(response)
    );
    getAirPollution().then(
      (response) => isMounted.current && setAirPollution(response)
    );
    return () => (isMounted.current = false);
  }, []);

  return (
    <pre>{JSON.stringify({ ...weatherPattern, ...airPollution }, null, 2)}</pre>
  );
};
