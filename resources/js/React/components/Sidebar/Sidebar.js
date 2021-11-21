export default function Sidebar({ categories, setCategoryId }) {
    return (
        <div className="wrapper_sidebar">
            {categories.map((category, index) => {
                return (
                    <button 
                        className="button_sidebar"
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
