import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

class About extends React.Component {
	render() {
		return (
			<div className="main">
				<Navbar />
				<div className="container height my-3">
					<div className="row gx-4">
						<h2>About This Application</h2>
						<hr />
						<div className="col-8 bg-light p-3">
							<p className="lead">
								This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:
							</p>
						</div>
						<div className="col-4 p-3">
							{/* TODO */}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default About;
