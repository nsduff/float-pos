import OptionsBar from "./OptionsBar/OptionsBar";
import TableItems from "./TableItems/TableItems";
import Tables from "./Tables/Tables";
import NewOrder from "./NewOrder/NewOrder";
import { useState } from "react";

export default function Workspace({
    takeOrder,
    newOrder,
    setNewOrder,
    setTakeOrder,
    options,
}) {
    const [showButton, setShowButton] = useState(null);

    if (options === true && takeOrder === false && showButton === null) {
        return <OptionsBar options={options} />;
    }
    if (takeOrder === false && showButton === null && options === false) {
        return <Tables showButton={showButton} setShowButton={setShowButton} />;
    }
    if (showButton != null)
        return (
            <TableItems showButton={showButton} setShowButton={setShowButton} />
        );
    if (takeOrder === true) {
        return (
            <NewOrder
                newOrder={newOrder}
                setNewOrder={setNewOrder}
                setTakeOrder={setTakeOrder}
            />
        );
    }
}
