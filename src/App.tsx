import './App.scss';

import React from "react";

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
					</div>
				</div>
			</div>
		);
	}
}

export default App;
