import TableItems from "./TableItems/TableItems";
import Tables from "./Tables/Tables";
import NewOrder from "./NewOrder/NewOrder";

export default function Workspace({
    orders,
    takeOrder,
    newOrder,
    setNewOrder,
    setTakeOrder,
    showButton,
    setShowButton,
}) {
    if (takeOrder === false && showButton === null) {
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
            />
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
