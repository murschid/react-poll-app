import React from "react";
import {Table} from "reactstrap";

const Opinion = ({opinions}) => {
	if (opinions.length > 0) {
		return (
			<>
				<hr/>
				<div className="mt-1">
					{/* <h5 className="text-uppercase">Opinions Are Here</h5> */}
					<Table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Chosen Option</th>
							</tr>
						</thead>
						<tbody>
							{opinions.map((item, index) => (
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.selectedOption}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</>
		);
	}
}

export default Opinion;