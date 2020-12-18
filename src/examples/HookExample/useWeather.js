import { useEffect, useState, useRef } from "react";
import { getWeather, getAirPollution } from "../../api";

export const useWeather = () => {
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

  return {
    airPollution,
    weatherPattern,
  };
};
