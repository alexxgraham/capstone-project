import HeaderButtons from '../HeaderButtons/HeaderButtons'
import './Header.scss'

function Header({ page, name, demo, calendar, addentry, editentry, date, medications, medication, addmedication, editmedication, settings }) {
	const now = new Date()
	const hour = now.getHours()
	let greeting = ''
	if (6 <= hour && hour <= 11) {
		greeting = 'Good Morning'
	} else if (12 <= hour && hour <= 16) {
		greeting = 'Good Afternoon'
	} else if (17 <= hour && hour <= 19) {
		greeting = 'Good Evening'
	} else if (hour >= 20 || hour <= 5) {
		greeting = 'Good Night'
	} else {
		greeting = 'Hello!'
	}
	if (demo) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
				<div className='header__buttons-section'>
					<HeaderButtons demo={demo} />
				</div>
			</header>
		)
	} else if (calendar) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
				<div className='header__buttons-section'>
					<HeaderButtons calendar={calendar} />
				</div>
			</header>
		)
	} else if (addentry) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
				<div className='header__buttons-section'>
					<HeaderButtons addentry={addentry} />
				</div>
			</header>
		)
	} else if (editentry) {
		return (
			<header className='header'>
				<h1 className='header__page'>{date}</h1>
			</header>
		)
	} else if (medications) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
				<div className='header__buttons-section'>
					<HeaderButtons medications={medications} />
				</div>
			</header>
		)
	} else if (medication) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
				<div className='header__buttons-section'>
					<HeaderButtons medication={medication} />
				</div>
			</header>
		)
	} else if (addmedication) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
				<div className='header__buttons-section'>
					<HeaderButtons addmedication={addmedication} />
				</div>
			</header>
		)
	} else if (editmedication) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
			</header>
		)
	} else if (settings) {
		return (
			<header className='header'>
				<h1 className='header__page'>{page}</h1>
				<div className='header__buttons-section'>
					<HeaderButtons settings={settings} />
				</div>
			</header>
		)
	} else if (!page) {
		return (
			<header className='header'>
				<section className='header__greet'>
					<h1 className='header__page'>{greeting}</h1>
					<h1 className='header__name'>{name}</h1>
				</section>
				<div className='header__buttons-section'>
					<HeaderButtons home={true} />
				</div>
			</header>
		)
	}
	return (
		<header className='header'>
			<h1 className='header__page'>{page}</h1>
			<h1 className='header__name'>{name}</h1>
			<div className='header__buttons-section'>
				<HeaderButtons home={true} />
			</div>
		</header>
	)
}
export default Header
