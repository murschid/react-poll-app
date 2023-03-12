import React from "react";
import shortid from "shortid";
import OptionForm from "./OptionForm";

const initOptions = [
	{ id: shortid.generate(), value: "", vote: 0 },
	{ id: shortid.generate(), value: "", vote: 0 },
];

class PollForm extends React.Component {
	state = {
		title: "",
		description: "",
		options: initOptions,
		errors: {},
		message: "",
		errMsg: ""
	};

	componentDidMount() {
		const { poll } = this.props;
		if (poll && Object.keys(poll).length > 0) {
			this.setState({
				title: poll.title,
				description: poll.description,
				options: poll.options,
			});
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleOptionChange = (event, index) => {
		const options = [...this.state.options];
		options[index].value = event.target.value;
		this.setState({ options });
	};

	createOption = () => {
		const { options } = this.state;
		if (options.length < 5) {
			options.push({
				id: shortid.generate(),
				value: "",
				vote: 0,
			});
			this.setState({ options });
		} else {
			this.setState({ errMsg: "You can create maximum five options" });
		}
	};

	deleteOption = (index) => {
		const { options } = this.state;
		if (options.length > 2) {
			options.splice(index, 1);
			this.setState({ options });
		} else {
			this.setState({ errMsg: "You must have at least two options" });
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { errors, isValid } = this.validation();

		if (isValid) {
			const { title, description, options } = this.state;
			const poll = { title, description, options };
			if (this.props.isUpdate) {
				poll.id = this.props.poll.id;
				this.props.submit(poll);
				this.setState({message: "Poll has updated successfully"});
			} else {
				this.props.submit(poll);
				event.target.reset();
				this.setState({
					title: "",
					description: "",
					options: initOptions,
					errors: {},
					message: "Poll has created successfully",
				});
			}
		} else {
			this.setState({ errors });
		}
	};

	validation = () => {
		const errors = {};
		const { title, description, options } = this.state;
		if (!title) {
			errors.title = "Please provide a title";
		} else if (title.length < 10) {
			errors.title = "Title is too short";
		} else if (title.length > 100) {
			errors.title = "Title is too long";
		}

		if (!description) {
			errors.description = "Please provide a description";
		} else if (description.length < 10) {
			errors.description = "Description is too short";
		} else if (description.length > 500) {
			errors.description = "Description is too long";
		}

		let optionErrors = [];
		options.forEach((opt, index) => {
			if (!opt.value) {
				optionErrors[index] = "Option text is empty";
			} else if (opt.length > 100) {
				optionErrors[index] = "Option text is too long";
			}
		});

		if (optionErrors.length > 0) {
			errors.options = optionErrors;
		}
		return {
			errors,
			isValid: Object.keys(errors).length === 0,
		};
	};

	render() {
		const { title, message, errMsg, description, options, errors } = this.state;
		return (
			<OptionForm
				title={title}
				message={message}
				errMsg={errMsg}
				description={description}
				options={options}
				buttonValue={this.props.buttonValue || "Create Poll"}
				errors={errors}
				handleChange={this.handleChange}
				handleOptionChange={this.handleOptionChange}
				createOption={this.createOption}
				deleteOption={this.deleteOption}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default PollForm;
