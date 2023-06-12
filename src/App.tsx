import './App.scss';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './modules/core/Header/Header';
import NavBar from './modules/core/NavBar/NavBar';

import SearchFlightsPage from './modules/search-flights/SearchFlightsPage';
import DataDrivenPage from './modules/data-driven-forms/DataDrivenPage';
import { ProfileContextProvider } from './modules/contexts/ProfileContext';

function App() {
	return (
		<div className="App">
			<ProfileContextProvider>
				<Router>
					<Header />
					<NavBar />

					<Routes>
						<Route path="/search" element={<SearchFlightsPage />} />
						<Route path="/admin" element={<DataDrivenPage />} />
						{/* <Route path="/buyers-agency" element={<FormsInStepper />} /> */}
						<Route path="*" element={<Navigate to="/search" />} />
					</Routes>
				</Router>
			</ProfileContextProvider>
		</div>
	)
}

export default App;
