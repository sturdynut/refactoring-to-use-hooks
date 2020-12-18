import { useWeather } from "./useWeather";

export const HookWithReactQueryRefactored = () => {
  const { airPollution, isError, isLoading, weatherPattern } = useWeather();

  if (isError) {
    return <div>Oops, there was an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <pre>{JSON.stringify({ ...weatherPattern, ...airPollution }, null, 2)}</pre>
  );
};
