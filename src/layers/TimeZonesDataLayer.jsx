import { useState, useEffect } from "react";

import { useAppDispatch } from "../store/store";
import { getTimezones } from "../api/timezones";
import { setTimezones } from "../store/timezoneSlice";

export const TimeZonesDataLayer = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTimezones()
      .then((timezones) => {
        dispatch(setTimezones(timezones));
      })
      .catch((error) => {
        setError("Произошла ошибка");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return "Загрузка...";
  }

  if (error) {
    return error;
  }

  return children;
};
