import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const PollList = (props) => {
	if (props.polls.length === 0) {
		return <p>There is no poll</p>;
	}
	return (
		<ListGroup>
			{props.polls.map((poll, index) => (
				<ListGroupItem
					key={index}
					onClick={() => props.selectPoll(poll.id)}
					className="cursor">
					{poll.title.length > 30
						? poll.title.substr(0, 30) + "..."
						: poll.title}
				</ListGroupItem>
			))}
		</ListGroup>
	);
};

export default PollList;
