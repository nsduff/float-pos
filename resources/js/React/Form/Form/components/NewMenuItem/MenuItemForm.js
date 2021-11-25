import React, { useState } from "react";
import "./MenuItemForm.css";
import axios from "axios";

const MenuItemForm = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    //   const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    //   });

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        //     setUserInput({
        //       ...userInput,
        //       enteredTitle: event.target.value,
        //     });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, amountDate: event.target.value };
        // });
    };
    const submitHandler = async (event) => {
        event.preventDefault();
        // console.log({ activeCategory });
        const postItem = await axios.post("/api/items", {
            name: enteredName,
            amount: enteredAmount,
            category_id: props.activeCategory,
        });

        const menuItemData = {
            name: enteredName,
            amount: enteredAmount,
            category_id: props.activeCategory,
        };

        // const editItemHandler = () => {};
        // const deleteItemHandler = () => {};
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
        props.onSaveMenuItemData(menuItemData);
        setEnteredName("");
        setEnteredAmount("");
    };

    return (
        <>
            <div>
                <button onClick={() => editItemHandler()}>Edit</button>
                <button onClick={() => deleteItemHandler()}>Delete</button>
            </div>
            <form action="" method="post" onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            value={enteredName}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="text"
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Menu Item</button>
                </div>
            </form>
        </>
    );
};

export default MenuItemForm;
