// import "./Topbar.css";

const Topbar = () => {
    const homeButtonHandler = () => {
        //logic to send the user back to the home screen
        //&& send the order IF anything was inputed.
        //still have to decide on whatever the home screen UI is.
    };
    const tablesButtonHandler = () => {};
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
        <div className="topbar mt-5">
            <button
                type="submit"
                className="topbar__right"
                id="tb-home"
                onClick={homeButtonHandler}
            >
                Home
            </button>
            <button
                type="submit"
                className="topbar__right"
                id="tb-tables"
                onClick={tablesButtonHandler}
            >
                Tables
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-transfer"
                onClick={transferButtonHandler}
            >
                Transfer
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-hold"
                onClick={holdButtonHandler}
            >
                Hold
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-delete"
                onClick={deleteButtonHandler}
            >
                Delete
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-modify"
                onClick={modifyButtonHandler}
            >
                Modify
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-quantity"
                onClick={quantityButtonHandler}
            >
                Quantity
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-repeat"
                onClick={repeatButtonHandler}
            >
                Repeat
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-seeServer"
                onClick={seeServerButtonHandler}
            >
                See Server
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-asApp"
                onClick={asAppButtonHandler}
            >
                As App
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-noMake"
                onClick={noMakeButtonHandler}
            >
                No Make
            </button>
            <button
                type="submit"
                className="topbar__left"
                id="tb-toGo"
                onClick={toGoButtonHandler}
            >
                To Go
            </button>
        </div>
    );
};

export default Topbar;
