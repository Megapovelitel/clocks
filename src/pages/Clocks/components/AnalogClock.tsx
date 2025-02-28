import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { CommonClockProps } from "./types";

export const AnalogClock = ({ value }: CommonClockProps) => {
  if (!value) {
    return null
  }

  return <Clock value={value} size={200} />;
};
