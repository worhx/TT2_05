import express from "express";
import { create } from "../controllers/expense.js";
const expenseRoute = express.Router({ mergeParams: true });

//all routes in here start with /login
expenseRoute.post('/', create);

export default expenseRoute;