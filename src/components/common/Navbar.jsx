import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg bg-light">
			<div className="container">
				<span className="navbar-brand">
					<NavLink to="/" className="nav-link"><img src="logo192.png" alt="Logo" width="30" height="30"/></NavLink>
				</span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/about" className="nav-link">About</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="https://github.com/murschid" target="_blank" rel="noreferrer">GitHub</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://linkedin.com/in/murschid" target="_blank" rel="noreferrer">Linkedin</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
