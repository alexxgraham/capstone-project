import './AddEntry.scss'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddEntry({ setEntries }) {
	const API_URL = process.env.REACT_APP_API_URL
	const navigate = useNavigate()
	const handleNewEntry = (e) => {
		e.preventDefault()
		const newEntry = {
			date: e.target.date.value,
			note: e.target.note.value,
		}
		axios.post(API_URL + '/entries/' + newEntry.date, newEntry).then(() => {
			navigate('/calendar/' + newEntry.date)
		})
	}
	return (
		<>
			<Header page={'Add New Entry'} addentry={true} />
			<main className='add-entry-main'>
				<section className='add-entry'>
					<form className='add-entry__form' onSubmit={handleNewEntry}>
						<div className='add-entry__form-section'>
							<label htmlFor='date' className='add-entry__label'>
								Enter Date
							</label>
							<input type='text' name='date' className='add-entry__input' placeholder='01-9-1999' />
						</div>
						<div className='add-entry__form-section'>
							<label htmlFor='note' className='add-entry__label'>
								Enter Note
							</label>
							<input type='text' name='note' className='add-entry__input' placeholder='Ex: Took (Medication Name)' />
						</div>
						<button className='add-entry__button'>Add Entry</button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	)
}
export default AddEntry
