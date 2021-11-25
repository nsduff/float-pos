export default function TableItems({
    orders,
    showButton,
    setShowButton,
    toggledItems,
    highlightHandler,
}) {
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
                            <h3 className="order_name_headline">
                                {order.table_name}
                            </h3>

                            {order.items.map((item, index) => {
                                console.log(item);
                                return (
                                    <div key={index}>
                                        <div className="order_list">
                                            <div
                                                className={
                                                    "order_item_name"
                                                    // +
                                                    // (toggledItems.includes(
                                                    //     order.indexOf(item)
                                                    // )
                                                    //     ? " active_order_item"
                                                    //     : null)
                                                }
                                                onClick={() =>
                                                    highlightHandler(
                                                        order.indexOf(item)
                                                    )
                                                }
                                            >
                                                <p className="p_padding">
                                                    {item.name}
                                                </p>
                                                <p className="p_padding">
                                                    {item.price} CZK
                                                </p>
                                            </div>
                                        </div>
                                        {item.comments != null &&
                                        item.comments.length > 0 ? (
                                            <ul>
                                                {item.comments.map(
                                                    (comment, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {comment}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    );
                }
            })}
            <div>Total: {total} &#75;&#269;</div>
            <button
                className="table_button"
                onClick={() => setShowButton(null)}
            >
                Back
            </button>
        </div>
    );
}
