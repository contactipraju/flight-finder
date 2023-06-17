export interface FlightsInfo {
	id: string;
	origin: string;
	destination: string;
	departure: string;
	arrival: string;
}

export interface Destination {
	id: string;
	name: string;
}

export interface FunctionProps {
	flights: FlightsInfo[];
	destinations: Destination[];
}

export interface Props {
	origin?: string;
	destination?: string;
}
export interface FState {
	origin: string;
	destination: string;
	map?: any;
	routes?: FlightsInfo[];
}
