import CalendarWidget from '../../components/CalendarWidget/CalendarWidget'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MedicationWidget from '../../components/MedicationWidget/MedicationWidget'
import './Home.scss'

function Home() {
	return (
		<main className='home-main'>
			<Header name={'Alexx'} />
			<CalendarWidget />
			<MedicationWidget />
			<Footer home={true} />
		</main>
	)
}
export default Home
