import React from "react";

import './FlightFinder.scss';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

let destinations = [
	{ id: 'ADL', name: 'Adelaide' },
	{ id: 'ASP', name: 'Alice Springs' },
	{ id: 'BNE', name: 'Brisbane' },
	{ id: 'CNS', name: 'Cairns' },
	{ id: 'CBR', name: 'Canberra' },
	{ id: 'DRW', name: 'Darwin' },
	{ id: 'OOL', name: 'Gold Coast' },
	{ id: 'HBA', name: 'Hobart' },
	{ id: 'MEL', name: 'Melbourne' },
	{ id: 'NTL', name: 'Newcastle' },
	{ id: 'PER', name: 'Perth' },
	{ id: 'MCY', name: 'Sunshine Coast' },
	{ id: 'SYD', name: 'Sydney' },
	{ id: 'TSW', name: 'Townsville' }
];

destinations = destinations.map(dest => ({ ...dest, label: dest.id + ' - ' + dest.name }));

class FlightFinder extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div id="flight-finder">
				<h2 className="component-title"> Flight Finder </h2>
				<div className="inputs clearfix">
					<div className="input">
						<Autocomplete
							disablePortal
							id="select-origin"
							options={destinations}
							sx={{ width: 200 }}
							renderInput={(params) => <TextField {...params} label="Origin" />}
						/>
					</div>
					<div className="input">
						<Autocomplete
							disablePortal
							id="select-destination"
							options={destinations}
							sx={{ width: 200 }}
							renderInput={(params) => <TextField {...params} label="Destination" />}
						/>
					</div>
					<div className="input">
						<Button className="find" variant="contained"> Find Routes </Button>
					</div>
				</div>
				<div className="results">
				</div>
			</div>
		);
	}
}

export default FlightFinder;
