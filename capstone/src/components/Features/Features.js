import './Features.scss'

function Features() {
	return (
		<>
			<div className='features'>
				<h2 className='features__header'>Features</h2>
				<section className='features__body'>
					<article className='features__phase'>
						<h3 className='features__title'>Phase One</h3>
						<ul className='features__list'>
							<li className='features__item'>· Welcome Screen (This Page)</li>
							<li className='features__item'>· Brief Overview of Calendar</li>
							<li className='features__item'>· Full Calendar</li>
							<li className='features__item'>· Add Entries to Calendar</li>
							<li className='features__item'>· Edit Calendar Entries</li>
							<li className='features__item'>· Full Cabinet</li>
							<li className='features__item'>· See Cabinet Medication Details</li>
							<li className='features__item'>· Add Medications to Cabinet</li>
							<li className='features__item'>· Edit Cabinet Medications</li>
							<li className='features__item'>· Settings</li>
						</ul>
					</article>
					<article className='features__phase'>
						<h3 className='features__title'>Phase Two</h3>
						<ul className='features__list'>
							<li className='features__item'>Set Up App Theme Schemes</li>
						</ul>
					</article>
					<article className='features__phase'>
						<h3 className='features__title'>Phase Three</h3>
						<ul className='features__list'>
							<li className='features__item features__item--highlight'>Account Authentification</li>
							<li className='features__item'>- Sign Up Page -- 'url'/signup</li>
							<li className='features__item'>- Log In Page -- 'url'/login</li>
						</ul>
					</article>
				</section>
			</div>
		</>
	)
}
export default Features
