import { useEffect, useRef, useState } from "react";
import { getWeather as getData } from "../../api";

export const SimpleExampleWithUnmountProtection = () => {
  const isMounted = useRef(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((response) => isMounted.current && setData(response));
    return () => (isMounted.current = false);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
