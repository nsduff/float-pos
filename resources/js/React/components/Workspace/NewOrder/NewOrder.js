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
        <div>
            <h3>New Order:</h3>
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
                    <div key={index}>
                        {/* ({counter}) */}
                        {newOrderItem.name} -{newOrderItem.price}
                        &#75;&#269;
                    </div>
                );
            })}
            <div>Total: {total} &#75;&#269;</div>
            <form action="" method="post" onSubmit={placeOrder}>
                <button>Place Order</button>
            </form>
        </div>
    );
}
