import React from "react";

export const DigitalClock = ({ value }) => {
  const time = value.toLocaleTimeString();

  return <p>{time}</p>;
};
