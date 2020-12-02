import React from 'react';
import {Link} from "gatsby";

import "../styles/header.scss";

const Header = () => {
	return ( 
			<header>
				<div className="section">
					<div className='header'>
						<div className="nav-left">
						<Link to="/about" className="nav-item active">Home</Link>
						<Link to="/contact" className="nav-item">Events</Link>
						<Link to="/contact" className="nav-item">Gallery</Link>
						<Link to="/contact" className="nav-item">News</Link>
						<Link to="/contact" className="nav-item">Albums</Link>
						<Link to="/contact" className="nav-item">Pages</Link>
						</div>
						<Link to="/contact" className="nav-item middle">ICON</Link>
						<div className="nav-right">

						<Link to="/contact" className="nav-item">
							<i class="fab fa-facebook-f"></i>
						</Link>
						<Link to="/contact" className="nav-item">
						<i class="fab fa-twitter"></i>
						</Link>
						<Link to="/contact" className="nav-item">
						<i class="fab fa-google-plus-g"></i>
						</Link>
						<Link to="/contact" className="btn">Purchase Ticker</Link>
						</div>
					</div>
				</div>
			</header>
	 );
}
 
export default Header;
