import axios from 'axios'
import format from 'date-fns/format'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './EditEntry.scss'

function EditEntry() {
	const navigate = useNavigate()
	const API_URL = process.env.REACT_APP_API_URL
	const { date } = useParams()
	const [currentEntries, setCurrentEntries] = useState([])
	const defaultDateURL = format(new Date(), 'MM-d-yyyy')
	const dateURLToDisplay = date ? date : defaultDateURL
	const refreshPage = () => {
		window.location.reload()
	}
	useEffect(() => {
		axios.get(API_URL + '/entries/' + dateURLToDisplay).then((response) => {
			const entries = response.data
			const entry = entries.note.split(',')
			setCurrentEntries(entry)
		})
	}, [API_URL, dateURLToDisplay])
	const handleEditEntry = (e) => {
		e.preventDefault()
		const editEntry = {
			date: dateURLToDisplay,
			note: e.target.note.value,
		}
		axios.patch(API_URL + '/entries/' + editEntry.date, editEntry).then(
			axios.get(API_URL + '/entries/' + editEntry.date).then((response) => {
				setCurrentEntries(response.data)
			})
		)
		navigate('/calendar/' + editEntry.date)
		refreshPage()
	}
	const handleDeleteEntries = (e) => {
		e.preventDefault()
		axios.delete(API_URL + '/entries/' + dateURLToDisplay).then(
			axios.get(API_URL + '/entries' + dateURLToDisplay).then((response) => {
				setCurrentEntries(response.data)
			})
		)
		refreshPage()
	}
	if (dateURLToDisplay === null || currentEntries === null) {
		return <div className='load-me'>Loading...</div>
	}
	return (
		<>
			<Header date={date} editentry={true} />
			<main className='edit-entry-main'>
				<section className='edit-entry'>
					<form className='edit-entry__form' onSubmit={handleEditEntry}>
						<div className='edit-entry__form-section'>
							<label htmlFor='note' className='edit-entry__label'>
								Edit Entries
							</label>
							{currentEntries.map((entry, i) => (
								<input key={i} type='text' name='note' className='edit-entry__input' placeholder={entry} />
							))}
						</div>
						<Link onClick={handleDeleteEntries} className='edit-entry__button edit-entry__button-add'>
							Delete Entries
						</Link>
						<button className='edit-entry__button'>Confirm Changes</button>
						<Link
							onClick={(e) => {
								e.preventDefault()
								navigate(-1)
							}}
							className='edit-entry__button edit-entry__button-cancel'>
							Cancel
						</Link>
					</form>
				</section>
			</main>
			<Footer />
		</>
	)
}
export default EditEntry
