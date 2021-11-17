import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        const data = await axios.get("/api/items");
        console.log(data.data);
        setCategories(data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {categories.map((category) => {
                return (
                    <button>
                        {category.name} - {category.price}
                    </button>
                );
            })}
        </div>
    );
}
