import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer({ home }) {
	if (home) {
		return (
			<footer className='footer'>
				<a target='_blank' rel='noreferrer' href='https://github.com/alexxgraham/capstone'>
					Made with ♡ by Alexx Graham
				</a>
				<Link to='/' className='exit'>
					Log Out
				</Link>
			</footer>
		)
	}
	return (
		<a className='footer' href='https://github.com/alexxgraham/capstone'>
			Made with ♡ by Alexx Graham
		</a>
	)
}
export default Footer
