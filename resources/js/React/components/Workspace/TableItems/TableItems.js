export default function TableItems({ orders, showButton }) {
    console.log(orders);

    const total = orders.map((order) =>
        order.items.map((item) => item.price).reduce((a, i) => a + i, 0)
    );
    // item.map((i) => {
    //     console.log(i);
    // });;

    return (
        <>
            {orders.map((order, index) => {
                if (order.id === showButton) {
                    return (
                        <div key={index}>
                            <h3>{order.table_name}</h3>

                            {order.items.map((item, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            {item.name} --{item.price}
                                            &#75;&#269;
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    );
                }
            })}
            <div>Total: {total} &#75;&#269;</div>
        </>
    );
}
