import React, { useEffect, useState } from "react";
import MenuItemLoop from "./components/MenuItem/MenuItemLoop";
import NewMenuItem from "./components/NewMenuItem/NewMenuItem";
import CategoryForm from "./components/NewCategory/CategoryForm";
// import "./FormDummy.css";
import axios from "axios";

export default function Form() {
    //Set Items that already exsist in DB
    const [items, setItems] = useState([]);
    //Set Categories that already exsist in DB
    const [categories, setCategories] = useState([]);
    //Menu Creator Tool to add new items within active Category when selected
    const [activeCategory, setActiveCategory] = useState(0);
    //Ability to toggle category className

    const catFetch = async () => {
        const apiCat = await axios.get("/api/categories");
        setCategories(apiCat.data);
    };

    const itemFetch = async () => {
        const apiItem = await axios.get("/api/items");
        setItems(apiItem.data);
    };
    //console.log(catFetchData);

    useEffect(() => {
        catFetch();
        itemFetch();
        // backend: initial load categories from DB
    }, []);

    const addMenuItem = (newItem) => {
        // backend: send new item to backend
        console.log("adding menu item", newItem);
        setItems([...items, newItem]);
    };
    // const addMenuItem = (newItem) => {
    //     // backend: send new item to backend

    //     setCategories((prevCategories) =>
    //         prevCategories.map((category, category_id) => {
    //             if (category_id === activeCategory) {
    //                 // need to modify items of this category

    //                 return {
    //                     title: category.name,
    //                     items: [newItem, ...category.items],
    //                 };
    //             }

    //             return category;
    //         })
    //     );
    // };

    const addCategory = (newCategory) => {
        // backend: send new category to backend

        setCategories((prevCategories) => [newCategory, ...prevCategories]);
    };

    // const highlightHandler = () => {
    //     // if (toggledCategory.includes(i)) {
    //     //     // remove
    //     //     setToggledCategory(toggledCategory.filter((c) => c !== i));
    //     // } else {
    //     //     // add
    //     //     setToggledCategory([...toggledCategory, i]);
    //     // }
    // };

    return (
        <div className="App">
            <div className="d-flex justify-content-around">
                <div className="todo-app mt-5">
                    <h1 className="h-one">Create New Category</h1>
                    <CategoryForm
                        onSaveCategory={addCategory}
                        // setCategories={setCategories}
                        // categories={categories}
                        // toggledCategory={toggledCategory}
                        // setToggledCategory={setToggledCategory}
                    />
                    {categories.map((category, i) => (
                        <button
                            className={
                                " todo-row complete btn text-body shadow border-0" +
                                (activeCategory === category.id
                                    ? " active"
                                    : " inactive")

                                // DESIGN TEAM: CAN YOU STYLE
                                // _ACTIVE & _INACTIVE CLASSES?
                            }
                            key={i}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <h2>{category.name}</h2>
                        </button>
                    ))}
                </div>
                <div className="todo-app mt-5">
                    <h1 className="h-one">
                        Create New Items for this Category
                    </h1>
                    {activeCategory !== null && (
                        <>
                            <NewMenuItem
                                onAddMenuItem={addMenuItem}
                                activeCategory={activeCategory}
                            />
                            {activeCategory && (
                                <MenuItemLoop
                                    items={items.filter(
                                        (element) =>
                                            element.category_id ===
                                            activeCategory
                                    )}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
