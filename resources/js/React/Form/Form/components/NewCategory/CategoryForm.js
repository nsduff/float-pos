import React, { useState } from "react";
import axios from "axios";

const CategoryForm = (props) => {
    const [enteredName, setEnteredName] = useState("");
    // const [highlightList, setHighlightList] = useState(props.toggledCategories);

    // const editCatHandler = () => {
    //     props.toggledCategories;
    // };
    // const deleteCatHandler = () => {
    //     newCategories = [];
    //     newCategories = props.categories.filter((category, index) => {
    //         return !props.toggledCategories.includes(props.category.temp_id);
    //     });
    //     props.setCategories([]);
    // };

    const nameChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredName(event.target.value);
        //     setUserInput({
        //       ...userInput,
        //       enteredTitle: event.target.value,
        //     });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const postCat = await axios.post("/api/categories", {
            name: enteredName,
        });

        const categoryData = {
            name: enteredName,
            // items: [],
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
        setEnteredName("");
    };
    return (
        /* MAKE THESE WORK OR GET RID OF THEM */
        /* <button onClick={() => editCatHandler()}>Edit</button>
            <button onClick={() => deleteCatHandler()}>Delete</button> */
        <form
            className="todo-form"
            action=""
            method="post"
            onSubmit={submitHandler}
        >
            <input
                className="todo-input"
                type="text"
                value={enteredName}
                onChange={nameChangeHandler}
                placeholder="Your category"
                required
            />

            <button className="todo-button" type="submit">
                Add Category
            </button>
        </form>
    );
};

export default CategoryForm;
