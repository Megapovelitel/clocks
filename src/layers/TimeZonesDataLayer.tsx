import { useState, useEffect } from "react";

import { getTimezonesThunk, timezoneSelectors } from "../store/timezoneSlice";
import { useAppDispatch, useAppSelector } from "../store";

type TimeZonesDataLayerProps = {
  children?: React.ReactNode
}

export const TimeZonesDataLayer = ({ 
  children
}: TimeZonesDataLayerProps): JSX.Element => {
  const loading = useAppSelector(timezoneSelectors.getTimezoneLoading)
  const error = useAppSelector(timezoneSelectors.getTimezoneError)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTimezonesThunk())
  }, []);

  if (loading) {
    return <p>{"Загрузка..."}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <div>{children}</div>;
};
