import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Workspace from "../Workspace/Workspace";

export default function App() {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(1);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        const data = await axios.get("/api/categories");
        // console.log(data.data);
        setCategories(data.data);
    };

    const fetchItems = async () => {
        const itemData = await axios.get("/api/items");
        // console.log(itemData.data);
        setItems(itemData.data);
    };

    useEffect(() => {
        fetchData();
        fetchItems();
        // console.log(categoryId);
    }, [categoryId]);

    return (
        <div className='container'>
            <div><Topbar/></div>
            <br />
            <br />
            <div>
                <div>
                <Sidebar categories={categories} setCategoryId={setCategoryId} />
                </div>
                <div>
                    <Menu categoryId={categoryId} items={items}/>
                </div>
                <div>
                    <Workspace />
                </div>
            </div>
            <br />
            <br />

            <br />
            <br />

            <div><Footer /></div>
            <br />
            <br />
        </div>
    );
}
