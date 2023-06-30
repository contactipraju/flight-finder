import { NavLink } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to="/search"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Search </NavLink>
					</li>
					<li>
						<NavLink to="/admin"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Admin </NavLink>
					</li>
					<li>
						<NavLink to="/portfolio"
							className={({isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
						> Portfolio </NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar;
