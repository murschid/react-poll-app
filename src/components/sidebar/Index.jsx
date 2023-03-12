import React from "react";
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import PollForm from "../forms/Index";
import PollList from "./PollList";

class Sidebar extends React.Component {
	state = {
		openModal: false,
	};

	toggleModal = () => {
		this.setState({
			openModal: !this.state.openModal,
		});
	};

	render() {
		return (
			<div className="bg-light p-3">
				<div className="d-flex mb-3">
					<Input
						type="search"
						placeholder="Search"
						value={this.props.searchTerm}
						onChange={(event) =>
							this.props.handleSearch(event.target.value)
						}
					/>
					<Button
						color="success"
						className="ms-2"
						onClick={this.toggleModal}>
						Create
					</Button>
				</div>
				<h3>List Of Polls</h3>
				<hr />
				<PollList
					polls={this.props.polls}
					selectPoll={this.props.selectPoll}
				/>
				<Modal
					isOpen={this.state.openModal}
					toggle={this.toggleModal}
					unmountOnClose={true}>
					<ModalHeader toggle={this.toggleModal}>
						Create A New Poll
					</ModalHeader>
					<ModalBody>
						<PollForm submit={this.props.addNewPoll} />
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default Sidebar;
