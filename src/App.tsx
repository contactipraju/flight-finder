import './App.scss';

import React from "react";

import FlightFinder from './modules/search-flights/components/FlightFinder/FlightFinder';

class App extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<div className="app">
				<div className="row">
					<div className="mixed-chart">
						<FlightFinder />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
