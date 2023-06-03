import { NavLink } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/buyers-agency"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Buyers Agency </NavLink>
					</li>
					<li>
						<NavLink to="/flight-finder"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Flight Finder </NavLink>
					</li>
					{/* <li>
						<NavLink to="/forms"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Data-driven Forms </NavLink>
					</li> */}
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;
