export default function Tables({ setShowButton, orders }) {
    const handleClick = (id) => {
        setShowButton(id);
    };
    return (
        <div className="wrapper_tables">
            {new Array(9).fill(null).map((a, i) => {
                return (
                        <button
                            key={i}
                            className={"table_button"}
                            onClick={() => handleClick(orders.id)}
                        >
                            {orders.table_name}
                        </button>
                );
            })}
        </div>
    );
}
