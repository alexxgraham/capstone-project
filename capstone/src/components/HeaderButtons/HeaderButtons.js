import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CalendarIcon from '../../assets/icons/light/calendar_white.svg'
import MedicationIcon from '../../assets/icons/light/medication_white.svg'
import SettingsIcon from '../../assets/icons/light/settings_white.svg'
import './HeaderButtons.scss'

function HeaderButtons({ home, calendar, addentry, medications, medication, addmedication, settings, demo }) {
	const API_URL = process.env.REACT_APP_API_URL
	const { medRx } = useParams()

	const [currentMedication, setCurrentMedication] = useState([])

	const defaultMedRx = 'Acetaminophen'
	const medRxToDisplay = medRx ? medRx : defaultMedRx
	useEffect(() => {
		if (medRxToDisplay === null) {
			return
		}
		axios.get(API_URL + '/medications/' + medRxToDisplay).then((response) => {
			setCurrentMedication(response.data)
		})
	}, [API_URL, medRxToDisplay])
	if (medRxToDisplay === null || currentMedication === null) {
		return <div className='load-me'>Loading...</div>
	}

	if (home) {
		return (
			<div className='header__home-container'>
				<section className='header__home-buttons'>
					<Link to='/calendar' className='header__button-home'>
						<img className='header-icon' src={CalendarIcon} alt='Calendar'></img>
					</Link>
					<Link to='/medications' className='header__button-home'>
						<img className='header-icon' src={MedicationIcon} alt='Calendar'></img>
					</Link>
					<Link to='/settings' className='header__button-home'>
						<img className='header-icon' src={SettingsIcon} alt='Settings'></img>
					</Link>
				</section>
			</div>
		)
	} else if (calendar) {
		return (
			<section className='header__calendar-buttons'>
				<Link to='/home' className='header__button' id='icon-calendar'>
					Home
				</Link>
				<Link to='/add/calendar' className='header__button' id='icon-addnewentry'>
					Add New Entry
				</Link>
			</section>
		)
	} else if (addentry) {
		return (
			<section className='header__calendar-buttons'>
				<Link to='/calendar' className='header__button' id='icon-addentry'>
					Return to Calendar
				</Link>
			</section>
		)
	} else if (medications) {
		return (
			<section className='header__medication-buttons'>
				<Link to='/home' className='header__button' id='icon-medications'>
					Home
				</Link>
				<Link to='/add/medications' className='header__button' id='icon-addnewmed'>
					Add New Medication
				</Link>
			</section>
		)
	} else if (medication) {
		return (
			<section className='header__medication-buttons'>
				<Link to='/medications' className='header__button' id='icon-medication'>
					Return to Cabinet
				</Link>
				<Link to={'/edit/medications/' + currentMedication.rx} className='header__button' id='icon-editmed'>
					Edit Medication
				</Link>
			</section>
		)
	} else if (addmedication) {
		return (
			<section className='header__calendar-buttons'>
				<Link to='/medications' className='header__button' id='icon-addmed'>
					Return to Cabinet
				</Link>
			</section>
		)
	} else if (settings) {
		return (
			<section className='header__setting-buttons'>
				<Link to='/home' className='header__button' id='icon-settings'>
					Back
				</Link>
			</section>
		)
	} else if (demo) {
		return (
			<section className='header__demo-buttons'>
				<Link to='/home' className='header__button-demo'>
					Sign Up
				</Link>
				<Link to='/home' className='header__button-demo'>
					Log In
				</Link>
			</section>
		)
	}
}
export default HeaderButtons
