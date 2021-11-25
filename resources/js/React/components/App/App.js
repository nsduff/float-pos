import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Workspace from "../Workspace/Workspace";
//import logoPos from "../logoPos.png";

export default function App() {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(7);
    const [items, setItems] = useState([]);
    const [newOrder, setNewOrder] = useState([]);
    const [takeOrder, setTakeOrder] = useState(false);
    const [options, setOptions] = useState(false);

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
        console.log(options + "app");
        fetchItems();
    }, [categoryId, newOrder, options]);

    return (
        <div className="container_pos">
            <div className="header">
                <img
                    className="logo"
                    src={"./img/logo_pos_final.png"}
                    alt="logo"
                />
                <h1 className="headline">Float POS</h1>
            </div>

            <div className="topbar">
                <Topbar setTakeOrder={setTakeOrder} setNewOrder={setNewOrder} />
            </div>

            <div className="sidebar">
                <Sidebar
                    categories={categories}
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                />
            </div>

            <div className="menu">
                <Menu
                    categoryId={categoryId}
                    items={items}
                    newOrder={newOrder}
                    setNewOrder={setNewOrder}
                    // newOrderPrice={newOrderPrice}
                    // setNewOrderPrice={setNewOrderPrice}
                    takeOrder={takeOrder}
                />
            </div>

            <div className="workspace">
                <Workspace
                    takeOrder={takeOrder}
                    newOrder={newOrder}
                    options={options}
                    setNewOrder={setNewOrder}
                    setTakeOrder={setTakeOrder}
                />
            </div>

            <div className="footer">
                <Footer options={options} setOptions={setOptions} />
            </div>
        </div>
    );
}
