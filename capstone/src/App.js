import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import AddEntry from './components/AddEntry/AddEntry'
import AddMedication from './components/AddMedication/AddMedication'
import EditEntry from './components/EditEntry/EditEntry'
import EditMedication from './components/EditMedication/EditMedication'
import Medication from './components/Medication/Medication'
import Calendar from './pages/Calendar/Calendar'
import Home from './pages/Home/Home'
import Medications from './pages/Medications/Medications'
import Settings from './pages/Settings/Settings'
import Welcome from './pages/Welcome/Welcome'

function App() {
	return (
		<BrowserRouter>
			<div className='body'>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/home' element={<Home />} />
					<Route path='/medications' element={<Medications />} />
					<Route path='/medications/:medRx' element={<Medication />} />
					<Route path='/add/medications' element={<AddMedication />} />
					<Route path='/edit/medications/:medRx' element={<EditMedication />} />
					<Route path='/calendar' element={<Calendar />} />
					<Route path='/add/calendar' element={<AddEntry />} />
					<Route path={'/calendar/:date'} element={<EditEntry />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
export default App
