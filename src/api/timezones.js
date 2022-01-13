import { httpClient } from "./httpClient";

export const getTimezones = () => {
  return httpClient('timezones.json')
}