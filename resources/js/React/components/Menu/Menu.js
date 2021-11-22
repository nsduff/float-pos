export default function Menu({
    categoryId,
    items,
    newOrder,
    setNewOrder,
    takeOrder,
}) {
    const addItemToOrder = (newItem) => {
        if (takeOrder === true) {
            setNewOrder([...newOrder, newItem]);
        }
    };

    return (
        <div>
            {items.map((item, index) => {
                if (categoryId === item.category_id) {
                    return (
                        <button
                            key={index}
                            onClick={() => addItemToOrder(item)}
                        >
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                        </button>
                    );
                }
            })}
        </div>
    );
}
