import { Expense } from "../models/expense.js"

export const create = async (req, res) => {

  try {

    const projectId = req.params.projectId
    const expenseData = req.body

    if (expenseData.amount) {
      expenseData.amount = parseFloat(expenseData.amount);
    }

    const _expense = await Expense.create({
      ...expenseData,
      "project_id": projectId
    })
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
    const projectId = req.params.projectId

    const _expense = await Expense.findAll(
      {
        where: {
          "project_id": projectId
        }
      }
    )
    res.json(_expense)
  }
  catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}

export const update = async (req, res) => {

  try {
    const expenseId = req.params.expensesId
    const expenseData = req.body

    if (expenseData.amount) {
      expenseData.amount = parseFloat(expenseData.amount);
    }

    const _expense = await Expense.update(
      {
        ...expenseData
      },
      {
        where: {
          "id": expenseId
        },
      });

    res.json(_expense)
  }
  catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}

export const deleteExpenses = async (req, res) => {

  try {
    const _expense = await Expense.destroy({
      where: {
        "id": req.query.id
      }
    })
    res.send(true)
  }
  catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}