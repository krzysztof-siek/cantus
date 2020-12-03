import React from 'react';
import {Link} from "gatsby";

import "../styles/header.scss";

const Header = () => {
	return ( 
			<header>
				<div className="section">
					<div className='header'>
						<div className="nav-left">
						<Link to="/" className="nav-item active">Home</Link>
						<Link to="/events" className="nav-item">Events</Link>
						<Link to="/gallery" className="nav-item">Gallery</Link>
						<Link to="/news" className="nav-item">News</Link>
						<Link to="/albums" className="nav-item">Albums</Link>
						<Link to="/pages" className="nav-item">Pages</Link>
						</div>
						<Link to="/" className="nav-item middle">ICON</Link>
						<div className="nav-right">

						<a href="#" className="nav-item">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="nav-item">
						<i class="fab fa-twitter"></i>
						</a>
						<a href="#" className="nav-item">
						<i class="fab fa-google-plus-g"></i>
						</a>
						<Link to="/ticket" className="btn">Purchase Ticker</Link>
						</div>
					</div>
				</div>
			</header>
	 );
}
 
export default Header;
