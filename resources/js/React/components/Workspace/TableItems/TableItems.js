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
                            <h3 className="order_name_headline">{order.table_name} order</h3>

                            {order.items.map((item, index) => {
                                return (
                        
                                        <div className="order_item_name" key={index}>
                                             <p className="p_padding"> {item.name} </p>
                                              <p className="p_padding">{item.price} &#75;&#269;</p>
                                           
                                        </div>
                                );
                            })}
                        </div>
                    );
                }
            })}
            <div className="order_total">Total: {total} &#75;&#269;</div>
        </>
    );
}
