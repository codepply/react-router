import React, { Component } from 'react'
import {
    NavLink,
    Link
  } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-container">
                <ul>
                    <li><Link className="nav-item" to="/">Home</Link></li>
                    <li><Link className="nav-item" to="/shop">Shop</Link></li>
                    <li><Link className="nav-item" to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}
