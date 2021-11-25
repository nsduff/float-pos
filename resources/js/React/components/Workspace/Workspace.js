import OptionsBar from "./OptionsBar/OptionsBar";
import TableItems from "./TableItems/TableItems";
import Tables from "./Tables/Tables";
import NewOrder from "./NewOrder/NewOrder";
import { useState } from "react";

export default function Workspace({
    orders,
    takeOrder,
    newOrder,
    setNewOrder,
    setTakeOrder,
    showButton,
    setShowButton,
    toggledItems,
    setToggledItems,
    pay,
    setPay,
    options,
}) {
    // const [toggledItems, setToggledItems] = useState([]);

    // toggles whether item is in toggled array
    // css file in ../App/dummyToggle.css

    // !! WEIRD BUG!!
    // If you click too fast when you add the same item to newOrder,
    // they all get highlighted when you add them to toggledItems
    const highlightHandler = (i) => {
        if (toggledItems.includes(i)) {
            // remove
            setToggledItems(toggledItems.filter((c) => c !== i));
        } else {
            // add
            // console.log([...toggledItems, i]);
            setToggledItems([...toggledItems, i]);
        }
    };

    if (options === true && takeOrder === false && showButton === null) {
        return <OptionsBar options={options} />;
    }
    if (takeOrder === false && showButton === null && options === false) {
        return (
            <Tables
                orders={orders}
                showButton={showButton}
                setShowButton={setShowButton}
            />
        );
    }
    if (showButton != null)
        return (
            <TableItems
                orders={orders}
                showButton={showButton}
                setShowButton={setShowButton}
                toggledItems={toggledItems}
                setToggledItems={setToggledItems}
                highlightHandler={highlightHandler}
                pay={pay}
                setPay={setPay}
            />
        );
    if (takeOrder === true) {
        return (
            <NewOrder
                newOrder={newOrder}
                setNewOrder={setNewOrder}
                setTakeOrder={setTakeOrder}
                toggledItems={toggledItems}
                setToggledItems={setToggledItems}
                highlightHandler={highlightHandler}
            />
        );
    }
}
