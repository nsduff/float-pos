import React, { useState } from "react";
// import Card from "./Card";
// import "./MenuItem.css";

function MenuItem(props) {
    return (
        <div className="expense-item">
            <button className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </button>
        </div>
    );
}

export default MenuItem;
