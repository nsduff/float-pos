import axios from "axios";

export default function TableItems({
    orders,
    showButton,
    setShowButton,
    toggledItems,
    highlightHandler,
    pay,
    setPay,
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
                                console.log(order.paid);
                                if (item.pivot.paid === 0) {
                                    console.log(item.name + " not paid");
                                }
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
                                        {item.pivot.item_comments != null &&
                                        item.pivot.item_comments.length > 0 ? (
                                            <ul>
                                                {item.pivot.item_comments
                                                    .split("\n\n")
                                                    .map((comment, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {comment}
                                                            </li>
                                                        );
                                                    })}
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
