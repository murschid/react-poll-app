import React from "react";
import {Form, FormGroup, FormFeedback, Input, Button, Label, Badge} from "reactstrap";

class ParticipateForm extends React.Component {
	state = {
		name: '',
		selectedOption: '',
		errors: {}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const {errors, isValid} = this.validation();
		if (isValid) {
			this.props.getOpinion({
				pollId: this.props.poll.id,
				name: this.state.name,
				selectedOption: this.state.selectedOption
			});
			event.target.reset();
			this.setState({
				name: '',
				selectedOption: '',
				errors: {}
			})
		} else {
			this.setState({errors});
		}
	}

	validation = () => {
		const errors = {};
		if (!this.state.name) {
			errors.name = 'Please provide a name';
		} else if (this.state.name.length > 20) {
			errors.name = 'Name is too long';
		}
		if (!this.state.selectedOption) {
			errors.selectedOption = 'Please select a option'
		}
		return {
			errors,
			isValid: Object.keys(errors).length === 0
		}
	}

	render () {
		return (
			<Form onSubmit={this.handleSubmit}>
				<div className="d-flex">
					<h4>Options:</h4>
					<Button type="button" color="info" className="ms-auto" onClick={this.props.toggleModal}>Edit</Button>
					<Button type="button" color="danger" className="ms-2" onClick={()=> this.props.deletePoll(this.props.poll.id)}>Delete</Button>
				</div>
				{this.props.poll.options.map((opt, index) => (
					<FormGroup className="my-2" key={index}>
						<Label className="d-flex">
							<Input type="radio" className="me-2" id={opt.id} name="selectedOption" value={opt.id} onChange={this.handleChange} invalid={this.state.errors.selectedOption ? true : false}/> {opt.value}
							<span className="ms-auto rounded px-3 py-1 bg-success text-white">{opt.vote}</span>
							<span className="ms-2 rounded px-3 py-1 bg-warning" color="white">{this.props.poll.totalVote > 0 ? ((100 * opt.vote) / this.props.poll.totalVote).toFixed(2) : 0} %</span>
						</Label>
					</FormGroup>
				))}
				<FormGroup className="my-3">
					<Label>Enter Your Name</Label>
					<Input name="name" placeholder="Jon Doe" value={this.state.value} onChange={this.handleChange} invalid={this.state.errors.name ? true : false}/>
					{this.state.errors.name && <FormFeedback>{this.state.errors.name}</FormFeedback>}
				</FormGroup>
				<Button type="submit">Submit Your Opinion</Button>
			</Form>
		)
	}
}

export default ParticipateForm;
