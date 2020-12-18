import { useWeather } from "./useWeather";

export const HookExample = () => {
  const { airPollution, weatherPattern } = useWeather();

  return (
    <pre>{JSON.stringify({ ...weatherPattern, ...airPollution }, null, 2)}</pre>
  );
};
