export default function Tables({ setShowButton, orders }) {
    const handleClick = (id) => {
        setShowButton(id);
    };
    return (
        <>
            <h3 className="tables_headline">Tables</h3>
            <div className="wrapper_tables">
                {orders.map((order, index) => {
                    // messing with payment
                    if (order.paid === 0) {
                        return (
                            <button
                                key={index}
                                className={"table_button"}
                                onClick={() => handleClick(order.id)}
                            >
                                {order.table_name}
                            </button>
                        );
                        // }
                    }
                })}
            </div>
        </>
    );
}
