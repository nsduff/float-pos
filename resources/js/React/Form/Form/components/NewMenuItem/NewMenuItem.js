import React from "react";
import MenuItemForm from "./MenuItemForm";

const NewMenuItem = (props) => {
    const saveMenuItemDataHandler = (enteredMenuItemData) => {
        const menuItemData = {
            ...enteredMenuItemData,
        };
        props.onAddMenuItem(menuItemData);
    };

    return (
        <div className="new-expense">
            <MenuItemForm
                onSaveMenuItemData={saveMenuItemDataHandler}
                activeCategory={props.activeCategory}
            />
        </div>
    );
};

export default NewMenuItem;
