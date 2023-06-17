import { Link } from 'react-router-dom';
import './Header.scss';

import { useContext } from 'react';
import { ProfileContext, IProfileContext } from './../../contexts/ProfileContext';

function Header() {
	const { isLoading, profile } = useContext(ProfileContext) as IProfileContext;

	return (
		<div className='header'>
			<Link to="/" className='site-title'> Flight Finder </Link>
			{
				!isLoading && profile.name && profile.name.length && 
				<div className='details'>
					<div><h3>{profile.name}</h3></div>
					<div>{profile.contact}</div>
					<div>{profile.email}</div>
					<div><a href={profile.linkedin}>{profile.linkedin}</a></div>
					<div><a href={profile.github}>{profile.github}</a></div>
				</div>
			}
			{isLoading && <div>Loading...</div>}
		</div>
	)
}

export default Header;