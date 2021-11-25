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
            <button
                className=" w-100 btn btn-lg gradient-button text-body shadow border-0"
                onClick={() => setOptionsHandler("Server Tools")}
            >
                Server Tools
            </button>{" "}
            {/* onClick={() => setOptionsHandler("Menu Manager")} */}
            <a
                className=" mt-1 w-100 btn btn-lg gradient-button text-body shadow border-0"
                href={`/create`}
            >
                Menu Manager
            </a>
            <button
                className=" w-100 mt-1 btn btn-lg gradient-button text-body shadow border-0"
                onClick={() => setOptionsHandler("Button 2")}
            >
                Button 2
            </button>
            <button
                className=" w-100 mt-1 btn btn-lg gradient-button text-body shadow border-0"
                onClick={() => setOptionsHandler("Button 3")}
            >
                Button 3
            </button>
        </>
    );
}
