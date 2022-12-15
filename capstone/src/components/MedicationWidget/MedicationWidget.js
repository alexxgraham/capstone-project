import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './MedicationWidget.scss'

function MedicationWidget() {
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
		<div className='medications-widget'>
			<Link to='/medications' className='medications-widget__title'>
				Medications
			</Link>
			<div className='medications-widget__body'>
				{medicationList.map((medications) => (
					<Link className='medications-widget__medicine' to={`/medications/${medications.rx}`} key={medications.rx}>
						<div className='medications-widget__data'>
							<p className='medications-widget__generic-text'>{medications.generic}</p>
							<section className='medications-widget__rx-info'>
								<p className='medications-widget__rx-name'>{medications.rx}</p>
								<p className='medications-widget__rx-dose'>{medications.dosage}</p>
							</section>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
export default MedicationWidget
