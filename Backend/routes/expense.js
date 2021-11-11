import express from "express";
import { create, get, update, deleteExpenses } from "../controllers/expense.js";
const expenseRoute = express.Router({ mergeParams: true });

//CREATE EXPENSE
expenseRoute.post('/', create);

//GET EXPENSE
expenseRoute.get('/', get);

//UPDATE EXPENSE
expenseRoute.put('/:expensesId', update);

//DELETE EXPENSE
expenseRoute.delete('/', deleteExpenses);

export default expenseRoute;