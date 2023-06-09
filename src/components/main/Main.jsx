import React from "react";
import { Col, Container, Row } from "reactstrap";
import shortid from "shortid";
import POLLS from "../../data/polls";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Sidebar from "../sidebar/Index";
import MainContent from "./Index";

class Main extends React.Component {
	state = {
		polls: [],
		selectedPoll: {},
		searchTerm: "",
	};

	componentDidMount() {
		this.setState({ polls: POLLS });
	}

	addNewPoll = (poll) => {
		poll.id = shortid.generate();
		poll.created = new Date();
		poll.totalVote = 0;
		poll.opinions = [];
		this.setState({
			polls: this.state.polls.concat(poll),
		});
	};

	deletePoll = (pollId) => {
		const polls = this.state.polls.filter((p) => p.id !== pollId);
		this.setState({ polls, selectedPoll: {} });
	};

	selectPoll = (pollId) => {
		const poll = this.state.polls.find((p) => p.id === pollId);
		this.setState({ selectedPoll: poll });
	};

	updatePoll = (updatedPoll) => {
		const polls = [...this.state.polls];
		const poll = polls.find((p) => p.id === updatedPoll.id);
		poll.title = updatedPoll.title;
		poll.description = updatedPoll.description;
		poll.options = updatedPoll.options;
		this.setState({ polls });
	};

	handleSearch = (searchTerm) => {
		this.setState({ searchTerm });
	};

	performSearch = () => {
		return this.state.polls.filter((poll) =>
			poll.title
				.toLowerCase()
				.includes(this.state.searchTerm.toLowerCase())
		);
	};

	getOpinion = (response) => {
		const { polls } = this.state;
		const poll = polls.find((p) => p.id === response.pollId);
		const option = poll.options.find(
			(opt) => opt.value === response.selectedOption
		);
		poll.totalVote++;
		option.vote++;
		const opinion = {
			id: shortid.generate(),
			name: response.name,
			selectedOption: response.selectedOption,
		};
		poll.opinions.push(opinion);
		this.setState({ polls });
	};

	render() {
		const polls = this.performSearch();
		return (
			<div className="main">
				<Navbar />
				<Container className="mt-4 height">
					<Row>
						<Col md={4}>
							<Sidebar
								polls={polls}
								searchTerm={this.state.searchTerm}
								handleSearch={this.handleSearch}
								selectPoll={this.selectPoll}
								addNewPoll={this.addNewPoll}
							/>
						</Col>
						<Col md={8}>
							<MainContent
								poll={this.state.selectedPoll}
								getOpinion={this.getOpinion}
								updatePoll={this.updatePoll}
								deletePoll={this.deletePoll}
							/>
						</Col>
					</Row>
				</Container>
				<Footer/>
			</div>
		);
	}
}

export default Main;
