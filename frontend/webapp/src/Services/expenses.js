import axios from "axios";
import React from "react";

const baseURL = "http://worhx.ddns.net:5000";

class ExpensesSvc extends React.PureComponent {
    async get(projectId) {
        const expensesList = await axios.get(`${baseURL}/projects/${projectId}/expenses`)
        return expensesList
    }

    async create(projectId, projectData) {
        const expensesList = await axios.post(`${baseURL}/projects/${projectId}/expenses`, projectData)
        return expensesList
    }

    async update(projectId, expensesId, projectData) {
        const expensesList = await axios.put(`${baseURL}/projects/${projectId}/expenses/${expensesId}`, projectData)
        return expensesList
    }

    async delete(projectId, expenseId) {
        const response = await axios.get(`${baseURL}/projects/${projectId}/expenses?id=${expenseId}`)
        return response
    }
}

export default ExpensesSvc;