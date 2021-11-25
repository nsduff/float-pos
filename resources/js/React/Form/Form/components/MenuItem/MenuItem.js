import React, { useState } from "react";
// import Card from "./Card";
// import "./MenuItem.css";

function MenuItem(props) {
    return (
        <button className="todo-row btn-width d-flex shadow border-0">
            <h2>{props.name}</h2>
            <div>{props.amount} CZK</div>
        </button>
    );
}

export default MenuItem;
