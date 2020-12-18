import { useQuery } from "react-query";
import { getWeather, getAirPollution } from "../../api";

export const useWeather = () => {
  const airPollutionResults = useQuery("airPollution", getAirPollution);
  const weatherResults = useQuery("weather", getWeather);

  const isLoading = weatherResults.isLoading || airPollutionResults.isLoading;
  const isError = weatherResults.isError || airPollutionResults.isError;
  const errors = [airPollutionResults.error, weatherResults.error].filter(
    Boolean
  );

  let airPollution = null;
  let weatherPattern = null;

  if (!isLoading && !isError) {
    airPollution = airPollutionResults.data;
    weatherPattern = weatherResults.data;
  }

  return {
    airPollution,
    errors,
    isError,
    isLoading,
    weatherPattern,
  };
};
