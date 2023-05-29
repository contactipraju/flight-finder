import { useState, useEffect } from "react";

import { getFlights, getDestinations } from "./SearchFlights.service";

//import FlightFinder from './components/FlightFinder/FlightFinder';
import FlightFinderFunctional from './components/FlightFinderFunctional/FlightFinderFunctional';

import './SearchFlightsPage.scss';

function SearchFlightsPage() {
	const [flights, setFlights] = useState([]);
	const [destinations, setDestinations] = useState([]);

	useEffect(() => {
		getFlights().then((resp) => {
			setFlights(resp.data);
		})
	}, []);

	useEffect(() => {
		getDestinations().then((resp) => {
			setDestinations(resp.data);
		})
	}, []);

	return (
		<div>
			{/* <FlightFinder /> */}
			<FlightFinderFunctional flights= {flights} destinations={destinations}/>
		</div>
	);
}

export default SearchFlightsPage;
