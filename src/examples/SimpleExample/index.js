import { useEffect, useState } from "react";
import { getWeather as getData } from "../../api";

export const SimpleExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
