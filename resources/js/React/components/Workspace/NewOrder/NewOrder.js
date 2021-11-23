import { useState, useEffect } from "react";

export default function NewOrder({ newOrder, setNewOrder, setTakeOrder }) {
    const [newOrderName, setNewOrderName] = useState("");
    const [selectedItem, setSelectedItem] = useState([]);

    if (newOrder.length === 0) {
        return <h3>New Order</h3>;
    }

    const handleNameChange = (event) => {
        setNewOrderName(event.target.value);
        console.log(newOrderName);
    };

    const clickItem = (name) => {
        setSelectedItem(...selectedItem, name);
        console.log(selectedItem);
    };

    const total = newOrder
        .map((newOrderItem) => newOrderItem.price)
        .reduce((a, i) => a + i, 0);

    const placeOrder = () => {
        setNewOrder([]);
        setNewOrderName("");
        setTakeOrder(false);
    };

    return (
        <div className="order">
            <h4 className="order_headline">New Order Name:</h4>
            <form action="" method="post">
                <input
                    type="text"
                    name="name"
                    value={newOrderName}
                    onChange={handleNameChange}
                />
            </form>
            {newOrder.map((newOrderItem, index) => {
                return (
                    <div className="order_list"
                        onClick={() => clickItem(newOrderItem.name)}
                        key={index}
                    >
                       <div className="order_item_name"> <p className= "p_padding">{newOrderItem.name}</p>
                       <p className= "p_padding" >{newOrderItem.price} CZK</p>
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
