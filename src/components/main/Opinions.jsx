import React from "react";
import { Table } from "reactstrap";

function Opinion({ opinions }) {
    if (opinions.length > 0) {
        return (
            <div className="bg-light mt-4 px-3 pb-3">
                <div className="mt-1">
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
