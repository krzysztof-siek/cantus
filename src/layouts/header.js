import React from 'react';
import {Link} from "gatsby";

import "../styles/header.scss";

const Header = () => {
    return (
        <header>
            <div className="section">
                <div className='header'>
                    <div className="nav-left">
                        <Link to="/" activeClassName="active" className="nav-item">Home</Link>
                        <Link to="/events" activeClassName="active" className="nav-item">Events</Link>
                        <Link to="/gallery" activeClassName="active" className="nav-item">Gallery</Link>
                        <Link to="/news" activeClassName="active" className="nav-item">News</Link>
                        <Link to="/albums" activeClassName="active" className="nav-item">Albums</Link>
                        <Link to="/pages" activeClassName="active" className="nav-item">Pages</Link>
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
