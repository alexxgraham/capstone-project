import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './EditMedication.scss'

function EditMedication() {
	const navigate = useNavigate()
	const refreshPage = () => {
		window.location.reload()
	}
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
	const handleEditMedication = (e) => {
		e.preventDefault()
		const editMedication = {
			rx: medRxToDisplay,
			generic: currentMedication.generic,
			dosage: e.target.dosage.value,
			frequency: e.target.frequency.value,
			times: currentMedication.times,
			quantity: e.target.quantity.value,
			use: currentMedication.use,
			why: currentMedication.why,
			description: currentMedication.description,
			side: currentMedication.side,
			serious: currentMedication.serious,
			major: currentMedication.major,
			moderate: currentMedication.moderate,
			minor: currentMedication.minor,
			interactions: currentMedication.interactions,
		}
		axios.patch(API_URL + '/medications/' + editMedication.rx, editMedication).then(
			axios.get(API_URL + '/medications/' + editMedication.rx).then((response) => {
				setCurrentMedication(response.data)
			})
		)
		navigate('/medications/' + editMedication.rx)
		refreshPage()
	}
	if (medRxToDisplay === null || currentMedication === null) {
		return <div className='load-me'>Loading...</div>
	}

	return (
		<>
			<Header page={'Edit ' + currentMedication.rx} editmedication={true} />
			<main className='edit-med-main'>
				<section className='edit-med'>
					<form className='edit-med__form' onSubmit={handleEditMedication}>
						<div className='edit-med__form-section'>
							<label htmlFor='dosage' className='edit-med__label'>
								Change Dosage
							</label>
							<input required type='text' name='dosage' className='edit-med__input' placeholder={currentMedication.dosage} />
						</div>
						<div className='edit-med__form-section'>
							<label htmlFor='frequency' className='edit-med__label'>
								Change Frequency
							</label>
							<input required type='text' name='frequency' className='edit-med__input' placeholder={currentMedication.frequency} />
						</div>
						<div className='edit-med__form-section'>
							<label htmlFor='quantity' className='edit-med__label'>
								Change Quantity
							</label>
							<input required type='text' name='quantity' className='edit-med__input' placeholder={currentMedication.quantity} />
						</div>
						<button className='edit-med__button'>Confirm Changes</button>
						<Link
							onClick={(e) => {
								e.preventDefault()
								navigate('/medications/' + medRxToDisplay)
							}}
							className='edit-med__button edit-med__button-cancel'>
							Cancel
						</Link>
					</form>
				</section>
			</main>
			<Footer />
		</>
	)
}
export default EditMedication
