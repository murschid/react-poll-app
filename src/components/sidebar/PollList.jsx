import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const PollList = (props) => {
	(props.polls.length === 0) && <p>There is no poll</p>;
	return (
		<ListGroup>
			{props.polls.map((poll, index) => (
				<ListGroupItem
					key={index}
					onClick={() => props.selectPoll(poll.id)}
					className="cursor">
					{index + 1 + ". "}
					{poll.title.length > 40
						? poll.title.substr(0, 40) + "..."
						: poll.title}
				</ListGroupItem>
			))}
		</ListGroup>
	);
};

export default PollList;
