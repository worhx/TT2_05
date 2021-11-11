import { Expense } from "../models/expense.js"

export const create = async (req, res) => {

  try {

    const expenseData = req.body

    if (expenseData.amount) {
      expenseData.amount = parseFloat(expenseData.amount);
    }

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

export const get = async (req, res) => {

  try {
    const _expense = await Expense.findAll()
    res.json(_expense)
  }
  catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}

export const update = async (req, res) => {

  try {
    const expenseData = req.body

    if (expenseData.amount) {
      expenseData.amount = parseFloat(expenseData.amount);
    }

    const _expense = await Expense.update(
      expenseData
    )
    res.json(_expense)
  }
  catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}

export const deleteExpenses = async (req, res) => {

  try {
    const _expense = await deleteExpenses.destroy({
      where: {
        "id": req.query.id
      }
    })
    res.json(_expense)
  }
  catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}