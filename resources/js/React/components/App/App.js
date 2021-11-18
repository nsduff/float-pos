import axios from "axios";
import { useEffect, useState } from "react";

import { Menu } from "./Menu";

export default function App() {
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        const data = await axios.get("/api/categories");
        // console.log(data.data);
        setCategories(data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(
        Menu.map((names) => {
            return names.category;
        })
    );

    return (
        <div>
            {categories.map((category) => {
                return <button>{category.name}</button>;
            })}
        </div>
    );
}
