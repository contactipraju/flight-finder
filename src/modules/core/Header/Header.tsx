import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
		<div className='header'>
			<Link to="/" className='site-title'> Prasada Indukuri </Link>
			<div className='details'>
				<div>+61 45 8866 586</div>
				<div>contactipraju@gmail.com</div>
				<div><a href='https://linkedin.com/in/prasadaraju'>linkedin.com/in/prasadaraju</a></div>
				<div><a href='https://github.com/contactipraju'>https://github.com/contactipraju</a></div>
			</div>
		</div>
	)
}

export default Header;
