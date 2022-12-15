import Features from '../../components/Features/Features'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Welcome.scss'

function Welcome() {
	return (
		<main className='welcome-main'>
			<Header page={'Medicine Cabinet'} demo={true} />
			<Features />
			<Footer />
		</main>
	)
}
export default Welcome
