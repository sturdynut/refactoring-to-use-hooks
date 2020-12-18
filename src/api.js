const API_KEY = process.env.REACT_APP_API_KEY;

const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const AIR_POLLUTION_BASE_URL =
  "http://api.openweathermap.org/data/2.5/air_pollution";

const weatherApiUrl = (query) => {
  return `${WEATHER_BASE_URL}?q=${query}&appid=${API_KEY}`;
};

const airPollutionApiUrl = (lat, long) => {
  return `${AIR_POLLUTION_BASE_URL}/history?lat=${lat}&lon=${long}&start=1606223802&end=1606482999&appid=${API_KEY}`;
};

export const getWeather = async () => {
  const url = weatherApiUrl("Grants Pass");
  const response = await fetch(url);

  return response.json();
};

export const getAirPollution = async () => {
  const lat = "42.436386";
  const long = "-123.304390";
  const url = airPollutionApiUrl(lat, long);
  const response = await fetch(url);

  return response.json();
};

export const getIconUrl = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
