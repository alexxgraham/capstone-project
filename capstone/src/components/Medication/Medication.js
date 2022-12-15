import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Medication.scss'

function Medication() {
	const API_URL = process.env.REACT_APP_API_URL
	const { medRx } = useParams()

	const [currentMedication, setCurrentMedication] = useState([])

	const defaultMedRx = 'Acetaminophen'
	const medRxToDisplay = medRx ? medRx : defaultMedRx
	const refreshPage = () => {
		window.location.reload()
	}
	useEffect(() => {
		if (medRxToDisplay === null) {
			return
		}
		axios.get(API_URL + '/medications/' + medRxToDisplay).then((response) => {
			setCurrentMedication(response.data)
		})
	}, [API_URL, medRxToDisplay])
	const handleDeleteMedication = (e) => {
		e.preventDefault()
		axios.delete(API_URL + '/medications/' + medRxToDisplay).then(
			axios.get(API_URL + '/medications' + medRxToDisplay).then((response) => {
				setCurrentMedication(response.data)
			})
		)
		refreshPage()
	}
	if (medRxToDisplay === null || currentMedication === null) {
		return <div className='load-me'>Loading...</div>
	}
	return (
		<>
			<Header page={currentMedication.rx} medication={true} />
			<main className='medication-main'>
				<h2 className='medication__generic-title'>{currentMedication.generic}</h2>
				<section className='medication'>
					<p className='medication__text'>
						Use {currentMedication.frequency} to {currentMedication.why}
					</p>
					<p className='medication__text'>Dosage: {currentMedication.dosage}</p>
					<p className='medication__text'>Side Effects: {currentMedication.side}</p>
					<p className='medication__text'>Serious Side Effects: {currentMedication.serious}</p>
				</section>
				<section className='medication note'>
					<article>
						<a href={currentMedication.interactions} className='medication__header medication__interactions medication__text'>
							Known Drug Interactions
						</a>
						<p className='medication__text medication__interaction'>{currentMedication.major} Serious Interactions</p>
						<p className='medication__text medication__interaction'>{currentMedication.moderate} Moderate Interactions</p>
						<p className='medication__text medication__interaction'>{currentMedication.minor} Minor Interactions</p>
					</article>
					<article>
						<p className='medication__header medication__text'>Drug Information:</p>
						<p className='medication__text'>{currentMedication.description}</p>
					</article>
					<article>
						<p className='medication__text medication__note'>
							<strong>Note:</strong> Speak to your doctor or call emergency services immediately if you experience any serious or worsening side effects.
						</p>
					</article>
				</section>
				<button className='medication__delete' onClick={handleDeleteMedication}>
					Delete Medication and All Data from your Cabinet
				</button>
			</main>
			<Footer />
		</>
	)
}
export default Medication
