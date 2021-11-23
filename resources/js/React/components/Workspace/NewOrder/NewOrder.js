import { useState, useEffect } from "react";
import axios from "axios";

export default function NewOrder({
    newOrder,
    setNewOrder,
    setTakeOrder,
    toggledItems,
    setToggledItems,
    highlightHandler,
}) {
    const [newOrderName, setNewOrderName] = useState("");
    const [errors, setErrors] = useState({});

    const handleNameChange = (event) => {
        setNewOrderName(event.target.value);
    };

    const clearOrder = () => {
        //reset states back to normal
        setNewOrder([]);
        setNewOrderName("");
        setTakeOrder(false);
    };

    const total = newOrder
        .map((newOrderItem) => newOrderItem.price)
        .reduce((a, i) => a + i, 0);

    const placeOrder = async (e) => {
        e.preventDefault();

        try {
            const itemsIds = newOrder.map((value) => value.id);
            // const itemsComments = newOrder.map((value) => value.comments);
            const data = await axios.post("/api/orders", {
                items: itemsIds,
                table_name: newOrderName,
                // ND: CAN'T POST COMMENTS YET, SO DON'T TRY
                // item_comments: itemsComments,
            });

            // stops here and wait for response from ajax request
            console.log(data.data);

            //reset states back to normal
            clearOrder();
        } catch (error) {
            alert("something went wrong");
            //log for developer use

            // console.log(error.message);
            // console.log(error.response);

            //show errors on screen
            setErrors(error.response.data);
            console.log(errors);
        }
    };

    // useEffect(() => {
    //     console.log(toggledItems);
    // }, [toggledItems]);

    return (
        <div className="order">
            <h4 className="order_headline">New Order Name:</h4>
            <form action="" method="post">
                <input
                    type="text"
                    name="table_name"
                    value={newOrderName}
                    onChange={handleNameChange}
                />
            </form>

            {/* {errors.map((error, index) => {
                if (error != []) {
                    return (
                        <>
                            <div key={index}>
                                {error.table_name && error.items}
                            </div>
                        </>
                    );
                } else {
                    return;
                }
            })} */}

            {/* show names and prices of new order */}
            {newOrder.map((newOrderItem, index) => {
                return (
                    <div className="order_list" key={index}>
                        <div
                            className={
                                "order_item_name" +
                                (toggledItems.includes(newOrderItem)
                                    ? " active_order_item"
                                    : null)
                            }
                            onClick={() => highlightHandler(newOrderItem)}
                        >
                            <p className="p_padding">{newOrderItem.name}</p>
                            <p className="p_padding">
                                {newOrderItem.price} CZK
                            </p>
                        </div>
                    </div>
                );
            })}
            {/* <ul>
                {comments.map((comment, index) => {
                    if (comments != []) {
                        return <li key={index}>{comment}</li>;
                    }
                })}
            </ul> */}
            {/* Comment button that works */}
            {/* {comments.length > 0 ? (
                <button onClick={saveComments}>Save Comments</button>
            ) : (
                <></>
            )} */}

            <div className="order_total">Total: {total} CZK</div>

            {/* send the order */}
            <form action="" method="post" onSubmit={placeOrder}>
                <button className="button_place_order">Place Order</button>
            </form>
            {/* cancel the order */}
            <button className="button_place_order" onClick={() => clearOrder()}>
                Cancel
            </button>
        </div>
    );
}
