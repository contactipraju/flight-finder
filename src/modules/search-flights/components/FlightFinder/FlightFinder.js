import React from "react";

import './FlightFinder.scss';

class FlightFinder extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	searchRoutes(origin, destination) {
		//
	}

	render() {
		return (
			<div id="flight-finder">
				<h2 className="component-title"> Flight Finder </h2>
			</div>
		);
	}
}

export default FlightFinder;
