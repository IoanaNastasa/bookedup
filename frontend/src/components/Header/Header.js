import React, { useState } from 'react'
import './header.scss'
import loginIcon from '../../assets/login-icon.png';
import logoutIcon from '../../assets/logout-icon.png';
import registerIcon from '../../assets/register-icon.png';
import profileIcon from '../../assets/profile-icon.png';
export default function Header() {
    const isLoggedIn = false;
    function logOut() {
        // erase token from cookie
        // redirect to landingpage
        console.log('logout');
    }
    function logIn() {
        // redirect to userpage
        console.log('login');
    }
    return (
        <div className="header">
            <h1 className="header__logo">BookedUp</h1>
            <div className="header__search">
                <input placeholder="Search books"></input>
            </div>
            {
                isLoggedIn ? 
                <div className="header__nav">
                    <a className="nav__link" onClick={isLoggedIn} href="#">
                        Account               
                        <img className="link__icon" src={profileIcon}></img>
                    </a>
                    <a className="nav__link" onClick={isLoggedIn} href="#">
                        Log out              
                        <img className="link__icon" src={logoutIcon}></img>
                    </a>
                </div>
                :
                <div className="header__nav">
                <a className="nav__link" onClick={ isLoggedIn ? logOut : logIn } href="#">
                    Log In              
                    <img className="link__icon" src={loginIcon}></img>
                </a>
                <a className="nav__link" onClick={ isLoggedIn ? logOut : logIn } href="#">
                    Register              
                    <img className="link__icon" src={registerIcon}></img>
                </a>
            </div>
            }
            
        </div>
    )
}
// { isLoggedIn ? "../../assets/login-icon.png" : "../../assets/login-icon.png"}