import axios from 'axios';
import { FlightsInfo } from "./SearchFlights.interfaces";

export async function getFlights() {
	const resp = await axios.get('json/flights.json');
	return resp.data;
}

export async function getDestinations() {
	const resp = await axios.get('json/destinations.json');
	return resp.data;
}

export function findRoutes(origin: string, destination: string, flights: FlightsInfo[]) {
	let map = new Map();

	map = prepareMap(flights);
	let parents = bfs(origin, destination, map);
	let path = reconstructPath(origin, destination, parents);

	return routesFromPath(path, flights);
}

function prepareMap(flights: FlightsInfo[]) {
	let cityMap = new Map();

	for (let i=0; i<flights.length; i++) {
		let origin = flights[i]['origin'];
		let destination = flights[i]['destination'];

		// If not present, add to the Map
		if (!cityMap.has(origin)) {
			cityMap.set(origin, []);
		}

		// Push all destinations for a origin into the array
		cityMap.get(origin).push(destination);
	}

	return cityMap;
}

function bfs(origin: string, destination: string, map: any) {
	console.log('(Breadth First) Searching routes for: ', origin, destination, map);

	let visited: string[] = [];
	let parent: any = {};

	const que: string[] = [];
	que.push(origin);
	visited.push(origin);

	while(que.length) {
		//console.log('que: ', que);

		const curr: string = que.shift()!;
		//console.log('current: ', curr);

		let neighbours = map.get(curr);
		if (neighbours && neighbours.length) {
			//console.log('neighbours: ', neighbours);

			for (const n of neighbours) {
				if (!visited.includes(n)) {
					//console.log('adding: ', n);
					que.push(n);
					visited.push(n);
					parent[n] = curr;
				}
				if (!destination.localeCompare(n)) {
					//console.log('FOUND', parent);
					return parent;
				}
			}
		}
	}

	return parent;
}

function reconstructPath(s: string, e: string, parents: any) {
	let path = [];
	for (let dis=e; dis != null; dis = parents[dis]) {
		path.push(dis);
	}
	path.reverse();

	if (!s.localeCompare(path[0])) {
		return path;
	} else {
		return [];
	}
}

function routesFromPath(path: string[], flights: FlightsInfo[]) {
	let filtered = [];
	for (let i=0; i<path.length-1; i++) {
		let idx = flights.findIndex((flight) => { return flight['origin'] === path[i] && flight['destination'] === path[i+1]});
		filtered.push(flights[idx]);
	}
	return filtered;
}

