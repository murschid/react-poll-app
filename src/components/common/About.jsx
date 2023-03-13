import React from "react";
import Navbar from "./Navbar";

class About extends React.Component {
	render () {
		return (
			<div className="main">
				<Navbar />
				<div className="container">
					<h1>This is about page</h1>
				</div>
			</div>
		);
	}
}

export default About;
