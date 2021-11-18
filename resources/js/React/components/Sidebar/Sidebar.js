export default function Sidebar({ categories, setCategoryId }) {
    return (
        <div>
            {categories.map((category) => {
                return (
                    <button onClick={() => setCategoryId(category.id)}>
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
}
