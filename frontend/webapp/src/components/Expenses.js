import Expense from './Expense'
import { useState } from 'react'

const Expenses = () => {
    const [expenses, setExpenses] = useState([{
        id: 1,
        projectId: 1,
        catId: 1
    },
    {
        id: 2,
        projectId: 2,
        catId: 2
    }])

    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    }

    

    return (
        <div>
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense}/>
            ))}
        </div>
    )
}

export default Expenses
