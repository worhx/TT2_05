import { React, useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Expense = ({ projectId }) => {
    const [expense, setExpense] = useState();

    useEffect(() => {
        axios
            .get(`http://worhx.ddns.net:5000/projects/${2}/expenses`)
            .then((res) => {
                setExpense(res.data);
            });
    }, []);

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
};

export default Expense;
