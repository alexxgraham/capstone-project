import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Medications.scss'

function Medications() {
	const API_URL = process.env.REACT_APP_API_URL
	const [medicationList, setMedicationList] = useState([])
	useEffect(() => {
		axios
			.get(API_URL + '/medications/')
			.then((response) => {
				setMedicationList(response.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [API_URL])
	return (
		<>
			<Header page={'Medicine Cabinet'} medications={true} />
			<main className='medications-main'>
				{medicationList.map((medications) => (
					<Link className='medications__link' to={`/medications/${medications.rx}`} key={medications.rx}>
						<div className='medications__data'>
							<p className='medications__generic-text'>
								{medications.generic} {medications.dosage}
							</p>
							<p className='medications__rx-text'>rx: {medications.rx}</p>
						</div>
						<article className='medications__info'>
							{<p className='medications__frequency-text'>Take: {medications.frequency}</p>}
							<p className='medications__use-text'>To: {medications.why}</p>
						</article>
					</Link>
				))}
			</main>
			<Footer />
		</>
	)
}
export default Medications
