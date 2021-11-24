export default function Tables({ setShowButton, orders }) {
    const handleClick = (id) => {
        setShowButton(id);
    };
    return (
        <>
            {orders.map((order, index) => {
                return (
                    <div className={"table_buttons"} key={index}>
                        <button
                            className={"table_button"}
                            onClick={() => handleClick(order.id)}
                        >
                            {order.table_name}
                        </button>
                    </div>
                );
            })}
        </>
    );
}
