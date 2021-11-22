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
      
        <div className='container'>
            
      <div><Topbar setTakeOrder={setTakeOrder} setNewOrder={setNewOrder} /></div>

            <div>
                <div>
                <Sidebar 
                    categories={categories} 
                    setCategoryId={setCategoryId} />
                </div>


                <div>
                <Menu                 
                    categoryId={categoryId}
                    items={items}
                    newOrder={newOrder}
                    setNewOrder={setNewOrder}
                    // newOrderPrice={newOrderPrice}
                    // setNewOrderPrice={setNewOrderPrice}
                    takeOrder={takeOrder}/>
                </div>


                <div>
                <Workspace 
                    takeOrder={takeOrder}
                    newOrder={newOrder}
                    setNewOrder={setNewOrder}
                    setTakeOrder={setTakeOrder}
                />
                </div>

            </div>

            <div><Footer /></div>

        </div>
    );
}
