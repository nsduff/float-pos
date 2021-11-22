export default function Sidebar({ categories, categoryId, setCategoryId }) {
    return (
        <div className="wrapper_sidebar">
            {categories.map((category, index) => {
                return (
                    <button
                        className={
                            "button_sidebar" +
                            (category.id === categoryId ? "_active" : "_inactive")
                        }
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
