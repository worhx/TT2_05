import { Expense } from "../models/expense.js"

export const create = async (req, res) => {

  const expenseData = req.body

  try {
    const _expense = await Expense.create(
      expenseData
    )
    if (!_expense) {
      throw new Error("Expenses not created")
    }
    res.json(_expense)
  }
  catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}