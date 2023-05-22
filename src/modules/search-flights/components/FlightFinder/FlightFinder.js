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

const FlightDistances = [
//	  ADL,  ASP,  BNE,  CNS,  CBR,  DRW,  OOL,  HBA,  MEL,  NTL,  PER,  MCY,  SYD,  TSV
	[   0, 1330, 1602, 2126,  971, 2609, 2618, 1162,  655, 1162, 2135, 1670, 1165, 1919], // ADL
	[1330,    0, 1968, 1454, 1950, 1301, 2019, 2454, 1857, 2017, 1979, 1957, 2021, 1424], // ASP
	[1602, 1968,    0, 1388,  942, 2846,   95, 1786, 1373,  612, 3613,   87,  731, 1110], // BNE
	[2126, 1454, 1388,    0, 2069, 1677, 1481, 2882, 2305, 1865, 3433, 1316, 1966,  283], // CNS
	[ 971, 1950,  942, 2069,    0, 3127,  891,  857,  467,  370, 3095, 1034,  247, 1795], // CBR
	[2609, 1301, 2846, 1677, 3127,    0, 2927, 3727, 3140, 3107, 2647, 2803, 3144, 1861], // DRW
	[2618, 2019,   95, 1481,  891, 2927,    0, 1715, 1328,  538, 3626,  178,  678, 1202], // OOL
	[1162, 2454, 1786, 2882,  857, 3727, 1715,    0,  597, 2616, 3015, 1871, 1056, 2616], // HBA
	[ 655, 1857, 1373, 2305,  467, 3140, 1328,  597,    0, 2050, 2727, 1452,  714, 2050], // MEL
	[1162, 2017,  612, 1865,  370, 3107,  538, 2616, 2050,    0, 3361,  697,  142, 1583], // NTL
	[2135, 1979, 3613, 3433, 3095, 2647, 3626, 3015, 2727, 3361,    0, 3638, 3297, 3382], // PER
	[1670, 1957,   87, 1316, 1034, 2803,  178, 1871, 1452,  697, 3638,    0,  835, 1041], // MCY
	[1165, 2021,  731, 1966,  247, 3144,  678, 1056,  714,  142, 3297,  835,    0, 1686], // SYD
	[1919, 1424, 1110,  283, 1795, 1861, 1202, 2616, 2050, 1583, 3382, 1041, 1686,    0]  // TSV
];

const Flights = [{
	tripid: 1234,
	origin: 'SYD',
	destination: 'BNE',
	departure: '',
	arrival: ''
}];

class FlightFinder extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			origin: {},
			destination: {}
		};

		this.selectedOrigin = this.selectedOrigin.bind(this);
		this.selectedDestination = this.selectedDestination.bind(this);
		this.searchRoutes = this.searchRoutes.bind(this);
	}

	selectedOrigin(event, value) {
		console.log('selectedOrigin: ', event, value);
		this.setState(prev => ({
			origin: value
		}));
	}

	selectedDestination(event, value) {
		console.log('selectedDestination: ', event, value);
		this.setState(prev => ({
			destination: value
		}));
	}

	searchRoutes() {
		console.log('Searching routes for: ', this.state['origin'], this.state['destination']);
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
							onChange={this.selectedOrigin}
							sx={{ width: 200 }}
							renderInput={(params) => <TextField {...params} label="Origin" />}
						/>
					</div>
					<div className="input">
						<Autocomplete
							disablePortal
							id="select-destination"
							options={destinations}
							onChange={this.selectedDestination}
							sx={{ width: 200 }}
							renderInput={(params) => <TextField {...params} label="Destination" />}
						/>
					</div>
					<div className="input">
						<Button className="find" variant="contained" onClick={this.searchRoutes}> Search Routes </Button>
					</div>
				</div>
				<div className="results">
				</div>
			</div>
		);
	}
}

export default FlightFinder;
