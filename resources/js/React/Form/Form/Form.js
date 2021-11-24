import React, { useEffect, useState } from "react";
import MenuItemLoop from "./components/MenuItem/MenuItemLoop";
import NewMenuItem from "./components/NewMenuItem/NewMenuItem";
import CategoryForm from "./components/NewCategory/CategoryForm";

// import "./App.css";

export default function Form() {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        // backend: initial load categories from DB
    }, []);

    const addMenuItem = (newItem) => {
        // backend: send new item to backend

        setCategories((prevCategories) =>
            prevCategories.map((category, category_id) => {
                if (category_id === activeCategory) {
                    // need to modify items of this category

                    return {
                        title: category.title,
                        items: [newItem, ...category.items],
                    };
                }

                return category;
            })
        );
    };

    const addCategory = (newCategory) => {
        // backend: send new category to backend

        setCategories((prevCategories) => [newCategory, ...prevCategories]);
    };

    console.log(activeCategory, categories);

    return (

        <div className="App ">
                    <div className="d-flex justify-content-around  ">
                        <div className="todo-app mt-5 ">
                            <h1 className="h-one">Create new category</h1>
                            <CategoryForm onSaveCategory={addCategory} />
                            {/* frontend: erase above */}
                            {categories.map((category, i) => (
                                <button
                                    className=" todo-row complete btn text-body shadow border-0"
                                    onClick={() => setActiveCategory(i)}
                                >
                                    <h2>Category:{category.title}</h2>
                                </button>
                            ))}
                        </div>
                        <div className="todo-app mt-5">
                            <h1 className="h-one">Create Items for the category</h1>
                            {activeCategory !== null && (
                                <div>
                                    <NewMenuItem
                                        onAddMenuItem={addMenuItem} />
                                    {/* frontend: erase above */}
                                    <MenuItemLoop
                                        items={categories[activeCategory].items}
                                    />
                                </div>

                            )}
                        </div>
                    </div>

                </div>
    );
}
