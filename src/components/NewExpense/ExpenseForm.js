import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //to prevent the default behaviour of the form which is to send a request and reload the page
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //to convert the string to a number
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title here"
            onChange={titleChangeHandler}
          />
        </div>

        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
