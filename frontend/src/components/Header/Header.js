import React, { useState } from 'react'
import './header.styles.scss'

export default function Header() {
    const isLoggedIn = true;
    return (
        <div className="header">
            <h1 className="header__logo">BookedUp</h1>
            <div className="header__search">
                <input placeholder="Search books"></input>
            </div>
            <div className="header__nav">
                <a href="#">Log In</a>
                <a href="#">Register</a>
            </div>
        </div>
    )
}
