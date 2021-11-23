export default function TableItems({ orders, showButton, setShowButton }) {
    let total = 0;

    return (
        <div>
            {orders.map((order, index) => {
                if (order.id === showButton) {
                    total = order.items
                        .map((item) => item.price)
                        .reduce((a, i) => a + i, 0);
                    return (
                        <div key={index}>
                            <h3>{order.table_name}</h3>

                            {order.items.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            {item.name} --{item.price}
                                            &#75;&#269;
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }
            })}
            <div>Total: {total} &#75;&#269;</div>
            <button onClick={() => setShowButton(null)}>Back</button>
        </div>
    );
}
