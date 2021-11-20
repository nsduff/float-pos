export default function NewOrder({ newOrder, setNewOrder, setTakeOrder }) {
    if (newOrder.length === 0) {
        return <h3>Your Order Goes Here</h3>;
    }

    const total = newOrder
        .map((newOrderItem) => newOrderItem.price)
        .reduce((a, i) => a + i, 0);

    const placeOrder = () => {
        setNewOrder([]);
        setTakeOrder(false);
    };

    return (
        <div>
            <h3>Your Order</h3>
            {newOrder.map((newOrderItem, index) => {
                return (
                    <div onClick={() => clickItem()} key={index}>
                        {newOrderItem.name} -- {newOrderItem.price}
                    </div>
                );
            })}
            <div>Total: {total}</div>
            <button onClick={() => placeOrder()}>Place Order</button>
        </div>
    );
}
