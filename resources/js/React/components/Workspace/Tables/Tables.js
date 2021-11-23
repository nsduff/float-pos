export default function Tables({ setShowButton, orders }) {
    const handleClick = (id) => {
        setShowButton(id);
    };
    return (
        
        <div className="wrapper_tables">
            {new Array(9).fill(null).map((a, i) => {
                return (
                    <div className={"table_buttons"} key={index}>
                        <button
                            key={i}
                            className={"table_button"}
                            onClick={() => handleClick(order.id)}
                        >
                            {orders.table_name}
                        </button>
                );
              }
            }
        </div>
    );
}
 //</div><div className="wrapper_tables">
    
     //   </div>