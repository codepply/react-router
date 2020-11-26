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
                    <li><NavLink exact className="nav-item" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-item" to="/shop">Shop</NavLink></li>
                    <li><NavLink className="nav-item" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}
