import React, { useState } from "react";
import "./MenuItemForm.css";
import "./NewMenuItem.css";

const CategoryForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //     setUserInput({
    //       ...userInput,
    //       enteredTitle: event.target.value,
    //     });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const categoryData = {
      title: enteredTitle,
      items: [],
    };
    // This prop below attaches the expenseData to the onSaveExpenseData.
    // This makes a little portal to send up the expenseData to the next file that
    // the onSaveExpenseData prop below is called in. It must be passed with the props
    // keyword also called here->  ((( const ExpenseForm = (props) => { ))) in the
    // parameters at the very top of this ExpenseForm function we are in now.
    // In this case, we are sending the expenseData props which is some new data written
    // by the user in the browser, and saved as an new expense with an onCLick submit button
    // connected to the data in the above^^ sumbitHandler to the NewExpense.js. The
    // ultimate destination for this new expense datais the App.js. This is called ---
    // Child to Parent Component Communication (bottom up).

    props.onSaveCategory(categoryData);
    setEnteredTitle("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Category</button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
