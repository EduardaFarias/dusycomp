import React from "react";
import {superBarStyle} from "./SuperBarStyle.css"

/**
 * 
 * @returns superior menu bar
 * Utiliza <nav>para indicar que vamos ter navegações ali (melhoraa busca)
 */

function SuperBar() {
    return(
        <nav className="super-bar">
            <ul className="super-bar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default SuperBar
