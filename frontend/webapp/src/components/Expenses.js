import Expense from './Expense';
import { useEffect, useState } from 'react';
import ExpensesSvc from "../Services/expenses.js"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Expenses = () => {
    const [expenses, setExpenses] = useState([])

    // const addExpense = (expense) => {
    //     setExpenses([...expenses, expense])
    // }

    useEffect(() => {
        getExpenses()
    }, []);

    const getExpenses = async () => {

        const listOfExpenses = await new ExpensesSvc().get("2");
        setExpenses(listOfExpenses.data);

    };

    return (

        <div style={{ marginTop: "50px" }}>

            <Table striped bordered hover size="sm">

                <thead>

                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((_expense) => (
                        <tr>

                            <td>{_expense.id}</td>
                            <td>{_expense.name}</td>
                            <td>{_expense.description}</td>
                            <td>{_expense.amount}</td>

                            <td>
                                <Button>Add</Button>

                                <Button>Edit</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    )
}

export default Expenses
