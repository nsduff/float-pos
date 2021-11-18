import React from "react";
import MenuItemForm from "./MenuItemForm";
import "./NewMenuItem.css";

const NewMenuItem = (props) => {
  const saveMenuItemDataHandler = (enteredMenuItemData) => {
    const menuItemData = {
      ...enteredMenuItemData,
    };
    props.onAddMenuItem(menuItemData);
  };
  return (
    <div className="new-expense">
      <MenuItemForm onSaveMenuItemData={saveMenuItemDataHandler} />
    </div>
  );
};

export default NewMenuItem;
