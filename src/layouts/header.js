import React from 'react';
import {Link} from "gatsby";

const Header = () => {
	return ( 
		<div className='header'>
			<h2>Welcome from header</h2>
			<Link to="/about">About</Link>
			<Link to="/contact">Contant</Link>
		</div>
	 );
}
 
export default Header;
