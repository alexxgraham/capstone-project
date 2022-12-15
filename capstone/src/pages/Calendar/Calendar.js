import axios from 'axios'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import isTomorrow from 'date-fns/isTomorrow'
import isYesterday from 'date-fns/isYesterday'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Calendar.scss'

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
function Calendar() {
	const API_URL = process.env.REACT_APP_API_URL
	const [medicationTimes, setMedicationTimes] = useState([])
	const [entryData, setEntryData] = useState([])
	const negDay = new Date()
	const posDay = new Date()
	const negDayFunction = negDay.setDate(negDay.getDate() - 18)
	const posDayFunction = posDay.setDate(posDay.getDate() + 1)
	const calendar = eachDayOfInterval({
		start: negDayFunction,
		end: posDayFunction,
	})
	const newToday = new Date()
	const todayTitle = format(newToday, 'MMMM d, yyyy')
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
			const entries = response.data
			setEntryData(entries)
		})
	}, [API_URL])
	console.log('? Entry Data: ', entryData)
	if (!medicationTimes) {
		return <div className='load-me'>Loading...</div>
	} else {
		return (
			<>
				<Header page={todayTitle} calendar={true} />
				<main className='calendar-main'>
					<section className='calendar'>
						{calendar.map((date, i) => (
							<Link className='entry-link' to={'/calendar/' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear()}>
								<article key={date} className={'date-container' + (isToday(date) ? ' date-container__today' : '')}>
									<h3 className='date'>{dateFormat(date)}</h3>
									<div className='date-entries'>
										{isYesterday(date) ? <p className='date-entry'>Took Prilosec</p> : ''}
										{i === 0 ? <p className='date-entry'>Updated Melatonin</p> : ''}
										{i < 18 ? <p className='date-entry'>Took Addderall</p> : ''}
										{i < 18 ? <p className='date-entry'>Took Addderall</p> : ''}
										{i < 18 ? <p className='date-entry'>Took Melatonin</p> : ''}
										{i === 10 ? <p className='date-entry'>Updated Adderall</p> : ''}
										{isToday(date) ? <p className='date-entry'>Take Adderall</p> : ''}
										{isToday(date) ? <p className='date-entry'>Take Adderall</p> : ''}
										{isToday(date) ? <p className='date-entry'>Take Melatonin</p> : ''}
										{isTomorrow(date) ? medicationTimes.map((medicationTime) => <p className='date-entry'>Take {medicationTime.name}</p>) : ''}
									</div>
								</article>
							</Link>
						))}
					</section>
				</main>
				<Footer />
			</>
		)
	}
}
export default Calendar
