import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const AddNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onAddNewExpense={AddNewExpenseHandler}
        />
      )}
    </div>
  );
}
