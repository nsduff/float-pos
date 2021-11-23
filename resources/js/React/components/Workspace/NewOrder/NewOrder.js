import { useState } from "react";
import axios from "axios";

export default function NewOrder({ newOrder, setNewOrder, setTakeOrder }) {
    const [newOrderName, setNewOrderName] = useState("");
    // const [selectedItem, setSelectedItem] = useState([]);

    const handleNameChange = (event) => {
        setNewOrderName(event.target.value);
        console.log(newOrderName);
    };

    // const clickItem = (item) => {
    //     setSelectedItem(item);
    // };

    const total = newOrder
        .map((newOrderItem) => newOrderItem.price)
        .reduce((a, i) => a + i, 0);

    const placeOrder = async (e) => {
        e.preventDefault();
        const itemsIds = newOrder.map((value) => value.id);
        const data = await axios.post("/api/orders", {
            items: itemsIds,
            table_name: newOrderName,
        });
        setNewOrder([]);
        setNewOrderName("");
        setTakeOrder(false);
    };

    // useEffect(() => {
    //     console.log(selectedItem);
    // }, [selectedItem]);

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
            {newOrder.map((newOrderItem, index) => {
                return (
                    <div
                        className="order_list"
                        onClick={() => clickItem(newOrderItem.name)}
                        key={index}
                    >
                        <div className="order_item_name">
                            {" "}
                            <p className="p_padding">{newOrderItem.name}</p>
                            <p className="p_padding">
                                {newOrderItem.price} CZK
                            </p>
                        </div>
                    </div>
                );
            })}
            <div className="order_total">Total: {total} CZK</div>
            <form action="" method="post" onSubmit={placeOrder}>
                <button className="button_place_order">Place Order</button>
            </form>
        </div>
    );
}
