import { useState } from "react";

export default function Footer({ pay, setPay }) {
    return (
        <div className="wrapper_footer">
            <button className="button_footer" onClick={() => setPay(!pay)}>
                PAY
            </button>
            <button className="button_footer">OPTIONS</button>
            <button className="button_footer_logout">
                <a href={`/logout`}>LOGOUT</a>
            </button>
        </div>
    );
}
