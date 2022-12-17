import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './AddMedication.scss'

function AddMedication() {
	const API_URL = process.env.REACT_APP_API_URL
	const navigate = useNavigate()
	const handleNewMedication = (e) => {
		e.preventDefault()
		const newMedication = {
			rx: e.target.rx.value,
			dosage: e.target.dosage.value,
			frequency: e.target.frequency.value,
			quantity: e.target.quantity.value,
		}
		axios.post(API_URL + '/medications/', newMedication).then(
			navigate('/medications/' + newMedication.rx)
		)
	}
	return (
		<>
			<Header page={'Add New Medication'} addmedication={true} />
			<main className='add-med-main'>
				<section className='add-med'>
					<form className='add-med__form' onSubmit={handleNewMedication}>
						<div className='add-med__form-section'>
							<label htmlFor='rx' className='add-med__label'>
								Enter Medication Name
							</label>
							<input type='text' name='rx' className='add-med__input' placeholder='Ex:  Acetaminophen, Diphenhydramine ...' />
						</div>
						<div className='add-med__form-section'>
							<label htmlFor='dosage' className='add-med__label'>
								Enter Dosage
							</label>
							<input type='text' name='dosage' className='add-med__input' placeholder='Ex:  10mg' />
						</div>
						<div className='add-med__form-section'>
							<label htmlFor='frequency' className='add-med__label'>
								Enter Frequency
							</label>
							<input type='text' name='frequency' className='add-med__input' placeholder='Ex:  Daily, As Needed' />
						</div>
						<div className='add-med__form-section'>
							<label htmlFor='quantity' className='add-med__label'>
								Enter Quantity
							</label>
							<input type='text' name='quantity' className='add-med__input' placeholder='Ex:  50' />
						</div>
						<button className='add-med__button'>Add Medication</button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	)
}
export default AddMedication
