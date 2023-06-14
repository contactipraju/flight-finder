import './DisplayFlightInfo.scss';
import { format } from "date-fns";

function DisplayFlightInfo(props: any) {
	const {id, origin, destination, departure, arrival} = props.item;

	return (
		<div className='flight-container'>
			<div>
				{format(new Date(departure), "MMMM do")}:&nbsp;&nbsp; 
				{origin}({format(new Date(departure), "H:mma")}) - {destination}({format(new Date(arrival), "H:mma")})
			</div>
		</div>
	);
}

export default DisplayFlightInfo;
