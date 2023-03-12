import React from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const OptionForm = ({ title, description, options, errors, buttonValue, handleSubmit, handleChange, handleOptionChange, createOption, deleteOption }) => {
	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<Label for="title">Title</Label>
				<Input name="title" id="title" placeholder="Give the title" value={title} onChange={handleChange} invalid={errors.title ? true : false}/>
				{errors.title && <FormFeedback>{errors.title}</FormFeedback>}
			</FormGroup>
			<FormGroup>
				<Label for="description">Description</Label>
				<Input type="textarea" name="description" id="description" placeholder="Give the description" value={description} onChange={handleChange} invalid={errors.description ? true : false}/>
				{errors.description && <FormFeedback>{errors.description}</FormFeedback>}
			</FormGroup>
			<FormGroup>
				<Label>Enter Option <Button color="info" className="btn btn-sm" onClick={createOption}>Add Option</Button></Label>
				{options.map((opt, index) => (
					<div key={index} className="d-flex my-2">
						<Input value={opt.value} onChange={(event) => handleOptionChange(event, index)} invalid={errors.options && errors.options[index] ? true : false}/>
						<Button color="danger" disabled={options.length <= 2} className="ms-2" onClick={() => deleteOption(index)}>Delete</Button>
					</div>
				))}
			</FormGroup>
			<Button color="primary" type="submit">{buttonValue}</Button>
		</Form>
	)
}

export default OptionForm;
