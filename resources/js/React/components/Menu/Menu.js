export default function Menu({ categoryId, items }) {
    return (
        <div>
            {items.map((item) => {
                if (categoryId === item.category_id) {
                    return (
                        <button>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                        </button>
                    );
                }
            })}
        </div>
    );
}
