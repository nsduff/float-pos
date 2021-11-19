

export default function Menu({ categoryId, items }) {
    return (
        <div className="menu">
            {items.map((item) => {
                if (categoryId === item.category_id) {
                    return <button className="menu_item">{item.name}</button>;
                }
            })}
        </div>
    );
}
