import axios from 'axios'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isTomorrow from 'date-fns/isTomorrow'
import isYesterday from 'date-fns/isYesterday'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CalendarWidget.scss'

const dateFormat = (date) => {
	if (isYesterday(date)) {
		return 'Yesterday'
	}
	if (isToday(date)) {
		return 'Today'
	}
	if (isTomorrow(date)) {
		return 'Tomorrow'
	}
	return format(date, 'MMM do')
}
function CalendarWidget() {
	const API_URL = process.env.REACT_APP_API_URL
	const [medicationTimes, setMedicationTimes] = useState([])
	const [entryData, setEntryData] = useState([])
	const negDay = new Date()
	const posDay = new Date()
	const negDayFunction = negDay.setDate(negDay.getDate() - 2)
	const posDayFunction = posDay.setDate(posDay.getDate() + 2)
	const calendar = eachDayOfInterval({
		start: negDayFunction,
		end: posDayFunction,
	})
	useEffect(() => {
		axios.get(API_URL + '/medications/').then((response) => {
			const medications = response.data

			const timedMedications = medications.filter((medication) => {
				if (!medication.times) {
					return false
				} else {
					return true
				}
			})
			const times = []
			timedMedications.forEach((timeMedication) => {
				timeMedication.times.split(',').forEach((entryTime) => {
					const [hours, minutes] = entryTime.split(':')
					times.push({ entry: `${hours}:${minutes}`, name: timeMedication.generic })
				})
			})
			times.sort(function (a, b) {
				return new Date(a.entry) - new Date(b.entry)
			})
			setMedicationTimes(times)
		})
	}, [API_URL])
	useEffect(() => {
		axios.get(API_URL + '/entries').then((response) => {
			const entriesData = response.data
			entriesData.forEach((entry) => {
				const note = entry.note.split(',')
				const [month, day] = entry.date.split('-')
				if (month === '1') {
					entriesData.push({ date: `Jan ${Number(day)}`, note: note })
				}
				if (month === '2') {
					entriesData.push({ date: `Feb ${Number(day)}`, note: note })
				}
				if (month === '3') {
					entriesData.push({ date: `Mar ${Number(day)}`, note: note })
				}
				if (month === '4') {
					entriesData.push({ date: `Apr ${Number(day)}`, note: note })
				}
				if (month === '5') {
					entriesData.push({ date: `May ${Number(day)}`, note: note })
				}
				if (month === '6') {
					entriesData.push({ date: `Jun ${Number(day)}`, note: note })
				}
				if (month === '7') {
					entriesData.push({ date: `Jul ${Number(day)}`, note: note })
				}
				if (month === '8') {
					entriesData.push({ date: `Aug ${Number(day)}`, note: note })
				}
				if (month === '9') {
					entriesData.push({ date: `Sep ${Number(day)}`, note: note })
				}
				if (month === '10') {
					entriesData.push({ date: `Oct ${Number(day)}`, note: note })
				}
				if (month === '11') {
					entriesData.push({ date: `Nov ${Number(day)}`, note: note })
				}
				if (month === '12') {
					entriesData.push({ date: `Dec ${Number(day)}`, note: note })
				}
			})
			setEntryData(entriesData)
		})
	}, [API_URL])
	if (!medicationTimes) {
		return <div className='load-me'>Loading...</div>
	} else {
		return (
			<div className='calendar-widget'>
				<Link to='/calendar' className='calendar-widget__title'>
					Calendar
				</Link>
				<div className='calendar-widget__body'>
					{calendar.map((date, i) => (
						<Link className='calendar-widget__link' to={'/calendar/' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear()}>
							<section key={i} className='calendar-widget__weekday'>
								<div className='calendar-widget__weekday-date'>{dateFormat(date)}</div>
								<article className='calendar-widget__entries'>
								{entryData.map((entry) => (entry.date === format(date, 'MMM d') ? <div key={date} className='widget-entries'>{entry.note.map((note) => (
											<p className='calendar-widget__entry'>{note}</p>
										))}</div> : ''))}
									{isToday(date) ? <Link className='new-entry__link' to='/add/calendar'>Add new entry</Link> : ''}
									{isTomorrow(date) ? medicationTimes.map((medicationTime) => <p className='calendar-widget__entry'>Take {medicationTime.name}</p>) : ''}
									{i === medicationTimes.length +1 ? medicationTimes.map((medicationTime) => <p className='calendar-widget__entry'>Take {medicationTime.name}</p>) : ''}
								</article>
							</section>
						</Link>
					))}
				</div>
			</div>
		)
	}
}
export default CalendarWidget
