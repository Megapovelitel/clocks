import React from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

export const AnalogClock = ({ value }) => {
  return <Clock value={value} size={200} />;
};
