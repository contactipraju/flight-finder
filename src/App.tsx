import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './modules/core/Header/Header';
import Nav from './modules/core/Nav/Nav';
import SearchFlightsPage from './modules/search-flights/SearchFlightsPage';
import DataDrivenForm from './modules/data-driven-forms/DataDrivenForm';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Nav />

				<Routes>
					<Route path="/flight-finder" element={<SearchFlightsPage />} />
					<Route path="/forms" element={<DataDrivenForm />} />
					<Route path="*" element={<h1>Page not found</h1>} />
				</Routes>
			</Router>
		</div>
	)
}

export default App;
