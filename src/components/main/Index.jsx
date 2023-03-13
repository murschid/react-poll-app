import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import PollForm from "../forms/Index";
import Opinion from "./Opinions";
import ParticipateForm from "./ParticipateForm";

class MainContent extends React.Component {
	state = {
		openModal: false,
	};

	toggleModal = () => {
		this.setState({
			openModal: !this.state.openModal,
		});
	};

	render() {
		if (Object.keys(this.props.poll).length === 0) {
			return (
				<div>
					<h3 className="text-uppercase fw-bolder">Welcome To My Poll Application</h3>
					<p>some demo text text</p>
				</div>
			);
		}
		const { poll, getOpinion, updatePoll, deletePoll } = this.props;
		return (
			<div className="bg-light p-3">
				<h3>{poll.title}</h3>
				<p>{poll.description}</p>
				<br />
				<ParticipateForm
					poll={poll}
					getOpinion={getOpinion}
					toggleModal={this.toggleModal}
					deletePoll={deletePoll}
				/>
				<Modal
					isOpen={this.state.openModal}
					toggle={this.toggleModal}
					unmountOnClose={true}>
					<ModalHeader toggle={this.toggleModal}>
						Update Poll
					</ModalHeader>
					<ModalBody>
						<PollForm
							poll={poll}
							submit={updatePoll}
							buttonValue="Update Poll"
							isUpdate={true}
						/>
					</ModalBody>
				</Modal>
				<Opinion opinions={poll.opinions} />
			</div>
		);
	}
}

export default MainContent;
