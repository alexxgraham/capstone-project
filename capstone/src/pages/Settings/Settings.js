import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Settings.scss'

function Settings() {
	return (
		<main className='settings-main'>
			<Header page={'Settings'} settings={true} />
			<div className='settings'>
				<article className='settings__account'>
					<form className='settings__form'>
						<div className='settings__form-section'>
							<label className='settings__form-label' htmlFor='username'>
								Username
							</label>
							<input className='settings__form-input' name='username' type='text' placeholder='alexxgraham' />
						</div>
						<div className='settings__form-section'>
							<label className='settings__form-label' htmlFor='name'>
								Name
							</label>
							<input className='settings__form-input' name='name' type='text' placeholder='Alexx' />
						</div>
						<div className='settings__form-section'>
							<label className='settings__form-label' htmlFor='email'>
								Email
							</label>
							<input className='settings__form-input' name='email' type='text' placeholder='alexxgraham@medcabinet.com' />
						</div>
						<div className='settings__form-section'>
							<label className='settings__form-label' htmlFor='password'>
								Password
							</label>
							<input className='settings__form-input' name='password' type='text' placeholder='********' />
						</div>
						<button className='settings__account__button'>Update Information</button>
					</form>
					<section className='settings__medications'>
						<label className='settings__form-label'>Current Medications</label>
						<ul className='settings__medications-list'>
							<li className='settings__medications-item'>Albuterol</li>
							<li className='settings__medications-item'>Aleve</li>
							<li className='settings__medications-item'>Melatonin</li>
							<li className='settings__medications-item'>Prilosec</li>
							<li className='settings__medications-item'>Ibuprofen</li>
						</ul>
						<button className='settings__account__delete-button'>Delete All Medications</button>
					</section>
				</article>
				<article className='settings__theme'>
					<label className='settings__form-label settings__theme-label'>App Theme</label>
					<div className='settings__theme-options'>
						<section className='settings__theme-red'>
							<div className='theme-icon theme-icon__light-red'></div>
							<div className='theme-icon theme-icon__red'></div>
							<div className='theme-icon theme-icon__dark-red'></div>
						</section>
						<section className='settings__theme-orange'>
							<div className='theme-icon theme-icon__light-orange'></div>
							<div className='theme-icon theme-icon__orange'></div>
							<div className='theme-icon theme-icon__dark-orange'></div>
						</section>
						<section className='settings__theme-green'>
							<div className='theme-icon theme-icon__light-green'></div>
							<div className='theme-icon theme-icon__green'></div>
							<div className='theme-icon theme-icon__dark-green'></div>
						</section>
						<section className='settings__theme-blue'>
							<div className='theme-icon theme-icon__light-blue'></div>
							<div className='theme-icon theme-icon__blue'></div>
							<div className='theme-icon theme-icon__dark-blue'></div>
						</section>
						<section className='settings__theme-purple'>
							<div className='theme-icon theme-icon__light-purple'></div>
							<div className='theme-icon theme-icon__purple'></div>
							<div className='theme-icon theme-icon__dark-purple'></div>
						</section>
					</div>
					<section className='current-theme'>
						<label className='settings__form-label'>Current Theme:</label>
						<div className='theme-icon__light-purple current-theme-icon'></div>
					</section>
				</article>
				<div className='settings__buttons'>
					<button className='settings__buttons-logout'>Log out</button>
					<button className='settings__buttons-delete'>Delete Account</button>
				</div>
			</div>
			<Footer />
		</main>
	)
}
export default Settings
