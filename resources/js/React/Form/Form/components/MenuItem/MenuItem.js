import React from "react";
// import Card from "./Card";

function MenuItem(props) {
  return (
      <button className="todo-row btn-width d-flex shadow border-0">
        <h2>{props.title}</h2>
        <div>{props.amount}CZK</div>
      </button>

  );
}

export default MenuItem;
