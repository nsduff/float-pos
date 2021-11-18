import TableItems from "./TableItems/TableItems";
import Tables from "./Tables/Tables";
import { useState } from "react";

export default function Workspace() {
    const [showButton, setShowButton] = useState(null);

    return (
        <div className={"table__container"}>
            {showButton === null ? (
                <Tables showButton={showButton} setShowButton={setShowButton} />
            ) : (
                <TableItems
                    showButton={showButton}
                    setShowButton={setShowButton}
                />
            )}
        </div>
    );
}
