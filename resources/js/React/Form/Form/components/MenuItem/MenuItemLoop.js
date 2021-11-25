// import React, { useState } from "react";
import Card from "./Card";
import MenuItem from "./MenuItem";
import "./MenuItemLoop.css";

function MenuItemLoop(props) {
    return (
        <Card className="expenses">
            {props.items.map((item, i) => (
                <MenuItem
                    key={i}
                    name={item.name}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
}

export default MenuItemLoop;
