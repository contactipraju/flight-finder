import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './modules/core/Header/Header';
import NavBar from './modules/core/NavBar/NavBar';

import SearchFlightsPage from './modules/search-flights/SearchFlightsPage';
import DataDrivenPage from './modules/data-driven-forms/DataDrivenPage';
import FormsInStepper from './modules/data-driven-forms/components/FormsInStepper/FormsInStepper';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<NavBar />

				<Routes>
					<Route path="/flight-finder" element={<SearchFlightsPage />} />
					<Route path="/forms" element={<DataDrivenPage />} />
					<Route path="/buyers-agency" element={<FormsInStepper />} />
					<Route path="*" element={<h1>Page not found</h1>} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;
