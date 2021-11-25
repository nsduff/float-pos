import { useState } from "react";
// import MenuManagerButton from "./OptionBarButtons/MenuManagerButton";
import ServerToolsButton from "./OptionBarButtons/ServerToolsButton";
import ButtonTwoHandler from "./OptionBarButtons/ButtonTwoHandler";
import ButtonThreeHandler from "./OptionBarButtons/ButtonThreeHandler";
export default function OptionsBar() {
    const [optionsHandler, setOptionsHandler] = useState(null);
    if (optionsHandler === "Server Tools") {
        return <ServerToolsButton />;
    }
    if (optionsHandler === "Menu Manager") {
        return <MenuManagerButton />;
    }
    if (optionsHandler === "Button 2") {
        return <ButtonTwoHandler />;
    }
    if (optionsHandler === "Button 3") {
        return <ButtonThreeHandler />;
    }
    return (
        <>
            <button onClick={() => setOptionsHandler("Server Tools")}>
                Server Tools
            </button>
            <button>
                {" "}
                {/* onClick={() => setOptionsHandler("Menu Manager")} */}
                <a href={`/create`}>Menu Manager</a>
            </button>
            <button onClick={() => setOptionsHandler("Button 2")}>
                Button 2
            </button>
            <button onClick={() => setOptionsHandler("Button 3")}>
                Button 3
            </button>
        </>
    );
}
