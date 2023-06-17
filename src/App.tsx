import './App.scss';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './core/Header/Header';
import NavBar from './core/NavBar/NavBar';

import SearchFlightsPage from './pages/search-flights/SearchFlightsPage';
import AdminPage from './pages/admin/AdminPage';
import { ProfileContextProvider } from './contexts/ProfileContext';

function App() {
	return (
		<div className="App">
			<ProfileContextProvider>
				<Router>
					<Header />
					<NavBar />

					<Routes>
						<Route path="/search" element={<SearchFlightsPage />} />
						<Route path="/admin" element={<AdminPage />} />
						<Route path="*" element={<Navigate to="/search" />} />
					</Routes>
				</Router>
			</ProfileContextProvider>
		</div>
	)
}

export default App;
