import { TimeItem } from "../models/time-item"
import { httpClient } from "./httpClient"

export const getTimezones = () => {
	return httpClient<Array<TimeItem>>("timezones.json")
}
