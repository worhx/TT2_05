import React from 'react'

const Expense = ({expense}) => {
    return (
        <div className='expense'>
            <h3>
                {expense.id}
            </h3>
            <p>
                {expense.projectId}
                {expense.catId}
            </p>
        </div>
    )
}

export default Expense
