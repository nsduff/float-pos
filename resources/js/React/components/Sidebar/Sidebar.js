export default function Sidebar({ categories, setCategoryId }) {
    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCategoryId(category.id)}
                    >
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
}
