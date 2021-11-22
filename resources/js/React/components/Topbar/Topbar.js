// import "./Topbar.css";

const Topbar = ({ setTakeOrder, setNewOrder }) => {
    const homeButtonHandler = () => {
        setNewOrder([]);
        setTakeOrder(false);
        //logic to send the user back to the home screen
        //&& send the order IF anything was inputed.
        //still have to decide on whatever the home screen UI is.
    };
    const tablesButtonHandler = () => {
        setTakeOrder(true);
    };
    const transferButtonHandler = () => {};
    const holdButtonHandler = () => {};
    const deleteButtonHandler = () => {};
    const modifyButtonHandler = () => {
        const enteredMod = prompt("mod up");
        console.log(enteredMod);
    };
    const quantityButtonHandler = () => {};
    const repeatButtonHandler = () => {};
    const seeServerButtonHandler = () => {
        console.log("See Server");
    };
    const asAppButtonHandler = () => {
        console.log("As App");
    };
    const noMakeButtonHandler = () => {
        console.log("No Make");
    };
    const toGoButtonHandler = () => {
        console.log("To Go");
    };

    return (
        <div className="wrapper_top">
            <button
                type="submit"
                className="button_top"
                //className="topbar__right"
                id="tb-home"
                onClick={homeButtonHandler}
            >
                Home
            </button>
            <button
                type="submit"
                className="button_top"
               // className="topbar__right"
                id="tb-tables"
                onClick={tablesButtonHandler}
            >
                Tables
            </button>
            <button
                type="submit"
                className="button_top"
                //className="topbar__left"
                id="tb-transfer"
                onClick={transferButtonHandler}
            >
                Transfer
            </button>
            <button
            className="button_top"
                type="submit"
                //className="topbar__left"
                id="tb-hold"
                onClick={holdButtonHandler}
            >
                Hold
            </button>
            <button
            className="button_top"
                type="submit"
                //className="topbar__left"
                id="tb-delete"
                onClick={deleteButtonHandler}
            >
                Delete
            </button>
            <button
            className="button_top"
                type="submit"
                //className="topbar__left"
                id="tb-modify"
                onClick={modifyButtonHandler}
            >
                Modify
            </button>
            <button
            className="button_top"
                type="submit"
               // className="topbar__left"
                id="tb-quantity"
                onClick={quantityButtonHandler}
            >
                Quantity
            </button>
            <button
            className="button_top"
                type="submit"
               // className="topbar__left"
                id="tb-repeat"
                onClick={repeatButtonHandler}
            >
                Repeat
            </button>
            <button
            className="button_top"
                type="submit"
                //className="topbar__left"
                id="tb-seeServer"
                onClick={seeServerButtonHandler}
            >
                See Server
            </button>
            <button
            className="button_top"
                type="submit"
               // className="topbar__left"
                id="tb-asApp"
                onClick={asAppButtonHandler}
            >
                As App
            </button>
            <button
            className="button_top"
                type="submit"
                //className="topbar__left"
                id="tb-noMake"
                onClick={noMakeButtonHandler}
            >
                No Make
            </button>
            <button
            className="button_top"
                type="submit"
               // className="topbar__left"
                id="tb-toGo"
                onClick={toGoButtonHandler}
            >
                To Go
            </button>
        </div>
    );
};

export default Topbar;
