export default function Menu({
    categoryId,
    items,
    setItems,
    newOrder,
    setNewOrder,
    takeOrder,
}) {
    const addItemToOrder = (newItem) => {
        if (takeOrder === true) {
            setNewOrder([...newOrder, newItem]);
            console.log(newOrder);
        }
    };

    return (
        <div className="wrapper_menu">
            {items.map((item, index) => {
                if (categoryId === item.category_id) {
                    return (
                        <button
                            className="button_menu"
                            key={index}
                            onClick={() => addItemToOrder(item)}
                        >
                            <div className="button_menu_item">{item.name}</div>
                            <div className="button_menu_price">
                                {item.price} CZK
                            </div>
                        </button>
                    );
                }
            })}
        </div>
    );
}
