export default function Menu({ categoryId, items }) {
    return (
        <div>
            {items.map((item) => {
                if (categoryId === item.category_id) {
                    return <button>{item.name}</button>;
                }
            })}
        </div>
    );
}
