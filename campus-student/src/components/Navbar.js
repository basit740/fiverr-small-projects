import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav id='navbar'>
			<NavLink to='/students'> Students </NavLink>
			<NavLink to='/campuses'> Campuses </NavLink>
		</nav>
	);
};

export default Navbar;
