import { useState } from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import { FlightsInfo, FunctionProps } from "../../SearchFlights.interfaces";
import { findRoutes } from "../../SearchFlights.service";
import DisplayFlightInfo from "../DisplayFlightInfo/DisplayFlightInfo";

import './FlightFinder.scss';

function FlightFinder(props: FunctionProps) {

	const myDestinations = props.destinations.map(dest => ({ ...dest, label: dest.id + ' - ' + dest.name }));
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [routes, setRoutes] = useState<FlightsInfo[]>([]);
	const [disabled, setDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const selectedOrigin = (event: any, value: any) => {
		console.log('selectedOrigin: ', event, value);

		if (value && value['id']) {
			setOrigin(value['id']);
			if (destination && destination.length) {
				setDisabled(false);
			}
		} else {
			setOrigin('');
			setDisabled(true);
		}
		setMessage('');
	}

	const selectedDestination = (event: any, value: any) => {
		console.log('selectedDestination: ', event, value);

		if (value && value['id']) {
			setDestination(value['id']);
			if (origin && origin.length) {
				setDisabled(false);
			}
		} else {
			setDestination('');
			setDisabled(true);
		}
		setMessage('');
	}

	const searchRoutes = () => {
		console.log('searchRoutes: ', origin, destination, props.flights);
		setMessage('Finding routes...');
		setRoutes(findRoutes(origin, destination, props.flights));
		setMessage('No services found');
	}

	return (
		<div id="flight-finder">
			<h2 className="component-title"> Search Flights </h2>
			<div className="desc"> Find shortest/quickest/economical routes between destinations using Breadh First Search (bfs)</div>
			<div className="inputs">
				<div className="input">
					<Autocomplete
						disablePortal
						id="select-origin"
						options={myDestinations}
						onChange={selectedOrigin}
						sx={{ width: 200 }}
						renderInput={(params) => <TextField {...params} label="Select Origin" />}
					/>
				</div>
				<div className="input">
					<Autocomplete
						disablePortal
						id="select-destination"
						options={myDestinations}
						onChange={selectedDestination}
						sx={{ width: 200 }}
						renderInput={(params) => <TextField {...params} label="Select Destination" />}
					/>
				</div>
				<div className="input">
					<Button className="find" variant="contained" 
						disabled={disabled}
						onClick={searchRoutes}
					> Search Routes </Button>
				</div>
			</div>
			<div className="results">
				<div>
					{routes!.length > 0 ? routes!.map((item: FlightsInfo) => (
						<DisplayFlightInfo key={item.id} item={item}></DisplayFlightInfo>
					)) : <div>{message}</div> }
				</div>
			</div>
			<div className="all-flights">
				<div>Displaying all flights data: </div>
				{props.flights.length > 0 ? props.flights.map((item: FlightsInfo) => (
					<DisplayFlightInfo key={item.id} item={item}></DisplayFlightInfo>
				)) : <div>No flight data present</div> }
			</div>
		</div>
	);
}

export default FlightFinder;
