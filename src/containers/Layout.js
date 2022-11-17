import React from 'react';
import {
    Link
  } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                    <Link to="/items">Items</Link>
                </li>
            </ul>
            <div>{children}</div>
        </div>
    )
}

export default Layout;