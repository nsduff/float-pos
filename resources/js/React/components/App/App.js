import axios from "axios";
import { useEffect, useState } from "react";

//dummy CSS
import "./dummyToggle.css";

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
    const [orders, setOrders] = useState([]);
    const [pay, setPay] = useState(false);
    const [newOrder, setNewOrder] = useState([]);
    const [showButton, setShowButton] = useState(null);
    const [takeOrder, setTakeOrder] = useState(false);

    // messing with toggling items
    const [toggledItems, setToggledItems] = useState([]);

    const fetchData = async () => {
        const data = await axios.get("/api/categories");
        setCategories(data.data);
    };

    const fetchItems = async () => {
        const itemData = await axios.get("/api/items");
        setItems(itemData.data);
    };

    const fetchOrders = async () => {
        const orderData = await axios.get("/api/orders");
        setOrders(orderData.data);
        console.log(orders);
    };

    useEffect(() => {
        fetchData();
        fetchItems();
        fetchOrders();
        // console.log(newOrder);
    }, [categoryId, newOrder, pay]);

    useEffect(() => {
        console.log(toggledItems);
    }, [toggledItems]);

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
                <Topbar
                    setTakeOrder={setTakeOrder}
                    newOrder={newOrder}
                    setNewOrder={setNewOrder}
                    setShowButton={setShowButton}
                    toggledItems={toggledItems}
                    setToggledItems={setToggledItems}
                />
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
                    setNewOrder={setNewOrder}
                    setTakeOrder={setTakeOrder}
                    orders={orders}
                    showButton={showButton}
                    setShowButton={setShowButton}
                    toggledItems={toggledItems}
                    setToggledItems={setToggledItems}
                />
            </div>

            <div className="footer">
                <Footer pay={pay} setPay={setPay} />
            </div>
        </div>
    );
}
