import React from "react";
import { useState, useEffect } from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import { FlightsInfo, FunctionProps } from "../../SearchFlights.interfaces";
import { findRoutes } from "../../SearchFlights.service";

import './FlightFinderFunctional.scss';

function FlightFinderFunctional(props: FunctionProps) {

	const myDestinations = props.destinations.map(dest => ({ ...dest, label: dest.id + ' - ' + dest.name }));
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [routes, setRoutes] = useState<FlightsInfo[]>([]);

	const selectedOrigin = (event: any, value: any) => {
		console.log('selectedOrigin: ', event, value);
		value && value['id'] ? setOrigin(value['id']) : setOrigin('');
	}

	const selectedDestination = (event: any, value: any) => {
		console.log('selectedDestination: ', event, value);
		value && value['id'] ? setDestination(value['id']) : setDestination('');
	}

	const searchRoutes = () => {
		console.log('searchRoutes: ', origin, destination, props.flights);
		setRoutes(findRoutes(origin, destination, props.flights));
	}

	return (
		<div id="flight-finder">
			<h2 className="component-title"> Flight Finder </h2>
			<div className="inputs">
				<div className="input">
					<Autocomplete
						disablePortal
						id="select-origin"
						options={myDestinations}
						onChange={selectedOrigin}
						sx={{ width: 200 }}
						renderInput={(params) => <TextField {...params} label="Origin" />}
					/>
				</div>
				<div className="input">
					<Autocomplete
						disablePortal
						id="select-destination"
						options={myDestinations}
						onChange={selectedDestination}
						sx={{ width: 200 }}
						renderInput={(params) => <TextField {...params} label="Destination" />}
					/>
				</div>
				<div className="input">
					<Button className="find" variant="contained" 
						onClick={searchRoutes}
					> Search Routes </Button>
				</div>
			</div>
			<div className="results">
				<div>
					{routes!.length > 0 ? routes!.map((item: FlightsInfo) => (
						<div key={item.id}>{item.origin} - {item.destination} - {item.departure} - {item.arrival}</div>
					)) : <div>No services found</div> }
				</div>
			</div>
			<div className="all-flights">
				<div>Displaying all flights data: </div>
				{props.flights.length > 0 ? props.flights.map((item: FlightsInfo) => (
					<div key={item.id}>{item.origin} - {item.destination} - {item.departure} - {item.arrival}</div>
				)) : <div>No services found</div> }
			</div>
		</div>
	);
}

export default FlightFinderFunctional;
