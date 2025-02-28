import React, { useMemo, useState } from "react"
import { useSelector } from "react-redux"

import { AnalogClock } from "./AnalogClock"
import { DigitalClock } from "./DigitalClock"

import "./Clock.css"
import { timezoneSelectors } from "../../../store/timezoneSlice"

const getDateWithOffset = (date: Date, offsetHours: number) => {
	const copy = new Date(date)
	copy.setHours(copy.getHours() + offsetHours)
	return new Date(copy)
}

type ClockWidgetProps = {
  date: Date
}

export const ClockWidget = ({ date }: ClockWidgetProps) => {
	const timezones = useSelector(timezoneSelectors.getTimezoneList)

	const [currentTimezoneId, setCurrentTimeZoneId] = useState(() => {
		if (timezones.length) {
			return timezones[0].id
		}
		return void 0
	})

	const displayDate = useMemo(() => {
		const timezone = timezones.find(x => x.id === currentTimezoneId)
		if (timezone) {
			return getDateWithOffset(date, parseInt(timezone.timezone))
		}
		return null
	}, [date, currentTimezoneId, timezones])

	const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		setCurrentTimeZoneId(e.target.value)
	}

	if (!displayDate) {
		return <p>Что-то пошло не так</p>
	}

	return (
		<div className="clock">
			<AnalogClock value={displayDate} />
			<DigitalClock value={displayDate} />

			<select value={currentTimezoneId} onChange={handleChange}>
				{timezones.map((timezone) => {
					return (
						<option 
							key={timezone.id}
							value={timezone.id}
						>
							{timezone.name}
						</option>
					)
				})}
			</select>
		</div>
	)
}
