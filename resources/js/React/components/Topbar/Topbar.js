// import "./Topbar.css";

import { isNull } from "lodash";
import { useEffect } from "react";

const Topbar = ({
    setTakeOrder,
    newOrder,
    setNewOrder,
    setShowButton,
    toggledItems,
    setToggledItems,
}) => {
    const homeButtonHandler = () => {
        setNewOrder([]);
        setTakeOrder(false);
        setShowButton(null);
        //LL -- logic to send the user back to the home screen
        //&& send the order IF anything was inputed.
        //ND -- oesn't do that, just clears the order
        //LL -- still have to decide on whatever the home screen UI is.
    };
    const tablesButtonHandler = () => {
        setTakeOrder(true);
    };

    const saveComments = (comment) => {
        console.log(toggledItems.length);
        const toggledItemIds = toggledItems.map((toggleItem) => {
            // console.log(toggleItem.id);
            return toggleItem.id;
        });
        // console.log(toggledItemIds);
        const newNewOrder = newOrder.map((newOrderItem) => {
            if (toggledItemIds.includes(newOrderItem.id)) {
                // console.log("boop")
                if (isNull(newOrderItem.comments)) {
                    newOrderItem.comments = [];
                    console.log("no longer null");
                }
                //find item and remove it if it's there
                const index = newOrderItem.comments.indexOf(comment);
                if (index > -1) {
                    newOrderItem.comments.splice(index, 1);
                } else {
                    newOrderItem.comments.push(comment);
                    console.log("triggered");
                }
            }
            return newOrderItem;
        });
        // console.log(newNewOrder);
        setNewOrder(newNewOrder);
        setToggledItems([]);
        console.log(newOrder);
    };

    const transferButtonHandler = () => {};
    const holdButtonHandler = () => {};
    const deleteButtonHandler = () => {
        if (newOrder.includes(toggledItems)) {
            // remove toggled items from newOrder array
            newOrder.map((newOrderItems) => {
                const index = newOrder.indexOf(toggledItems);
                if (index > -1) {
                    newOrderItems.splice(index, 1);
                }
            });
        }
        setToggledItems([]);
        console.log(toggledItems);
    };

    const modifyButtonHandler = () => {
        const enteredMod = prompt("Custom Modification");
        saveComments(enteredMod);
    };
    const quantityButtonHandler = () => {
        const quantity = prompt("Set Quantity");
        const newNewOrder = new Array(quantity - 1).fill(toggledItems);
        setNewOrder(...newOrder, newNewOrder);
        // ND: breaks the page, don't use yet
    };

    const repeatButtonHandler = () => {
        // const newItems = toggledItems.map((item);
        // setNewOrder([...newOrder, newItems]);
        // setToggledItems([]);
    };

    const seeServerButtonHandler = () => {
        saveComments("See Server");
    };
    const asAppButtonHandler = () => {
        saveComments("As App");
    };
    const noMakeButtonHandler = () => {
        saveComments("No make");
    };
    const toGoButtonHandler = () => {
        saveComments("To Go");
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
                New Order
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
