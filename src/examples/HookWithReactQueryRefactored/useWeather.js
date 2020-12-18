import { useQuery } from "react-query";
import { getWeather, getAirPollution } from "../../api";

const mapKey = (key, results) =>
  results.map((result) => result[key]).filter(Boolean);

const any = (key, results) => mapKey(key, results).length > 0;

export const useWeather = () => {
  const results = [
    useQuery("airPollution", getAirPollution),
    useQuery("weather", getWeather),
  ];

  const errors = mapKey("error", results);
  const isError = any("isError", results);
  const isLoading = any("isLoading", results);

  const [airPollution, weather] = results;

  return {
    airPollution: airPollution.data,
    errors,
    isError,
    isLoading,
    weatherPattern: weather.data,
  };
};
