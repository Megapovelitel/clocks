import React, { useEffect, useState } from "react";
import { Clock } from "./components/Clock";
import "./Clocks.css";

const getDateNoOffset = () => {
  const now = new Date();
  const gmt = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  return new Date(gmt);
};

export const Clocks = () => {
  const [date, setDate] = useState(getDateNoOffset());
  const [numberOfClocks, setNumberOfClocks] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(getDateNoOffset());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const clocks = Array.from({ length: numberOfClocks }, (_, index) => (
    <Clock key={index} date={date} />
  ));

  return <div className="grid">{clocks}</div>;
};
