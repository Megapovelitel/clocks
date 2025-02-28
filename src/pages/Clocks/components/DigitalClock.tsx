import { CommonClockProps } from "./types";

export const DigitalClock = ({ value }: CommonClockProps) => {
  if (!value) {
    return null
  }

  const time = value.toLocaleTimeString();

  return <p>{time}</p>;
};
