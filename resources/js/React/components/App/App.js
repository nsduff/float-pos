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
    const [newOrder, setNewOrder] = useState([]);
    const [takeOrder, setTakeOrder] = useState(false);

    const fetchData = async () => {
        const data = await axios.get("/api/categories");
        setCategories(data.data);
    };

    const fetchItems = async () => {
        const itemData = await axios.get("/api/items");
        setItems(itemData.data);
    };

    useEffect(() => {
        fetchData();
        fetchItems();
    }, [categoryId, newOrder]);

    return (
        <div>
            <Topbar setTakeOrder={setTakeOrder} setNewOrder={setNewOrder} />
            <Sidebar categories={categories} setCategoryId={setCategoryId} />
            <Menu
                categoryId={categoryId}
                items={items}
                newOrder={newOrder}
                setNewOrder={setNewOrder}
                // newOrderPrice={newOrderPrice}
                // setNewOrderPrice={setNewOrderPrice}
                takeOrder={takeOrder}
            />
            <Workspace
                takeOrder={takeOrder}
                newOrder={newOrder}
                setNewOrder={setNewOrder}
                setTakeOrder={setTakeOrder}
            />
            <Footer />
        </div>
    );
}
