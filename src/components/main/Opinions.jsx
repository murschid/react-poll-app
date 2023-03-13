import React from "react";
import {Table} from "reactstrap";

const Opinion = ({opinions}) => {
	if (opinions.length > 0) {
		return (
			<div className="bg-light mt-4 p-3">
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
			</div>
		);
	}
}

export default Opinion;