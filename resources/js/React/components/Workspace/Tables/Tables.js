export default function Tables({ setShowButton, orders }) {
    const handleClick = (id) => {
        setShowButton(id);
    };
    return (
        <div className="wrapper_tables">
            {orders.map((order, index) => {
                // messing with payment
                // if (order.paid === false) {
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
            })}
        </div>
    );
}
