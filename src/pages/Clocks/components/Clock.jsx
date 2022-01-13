import React, { useState } from "react";
import { useSelector } from "react-redux";

import { AnalogClock } from "./AnalogClock";
import { DigitalClock } from "./DigitalClock";

import "./Clock.css";

const getDateWithOffset = (date, offsetHours) => {
  const copy = new Date(date);
  copy.setHours(copy.getHours() + offsetHours);
  return new Date(copy);
};

export const Clock = ({ date }) => {
  const timezones = useSelector((state) => state.timezones.timezones);
  const [{ timezone, name }, setCurrentTimeZone] = useState(timezones[0]);
  const displayDate = getDateWithOffset(date, parseInt(timezone));

  const handleChange = (e) => {
    const name = e.target.value;
    const timezone = timezones.find((timezone) => timezone.name === name);
    setCurrentTimeZone(timezone);
  };

  return (
    <div className="clock">
      <AnalogClock value={displayDate} />
      <DigitalClock value={displayDate} />
      <select value={name} onChange={handleChange}>
        {timezones.map((timezone) => {
          return <option value={timezone.name}>{timezone.name}</option>;
        })}
      </select>
    </div>
  );
};
