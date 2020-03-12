import React from 'react';
import './navbar.scss';
import homeIcon from '../../assets/home-icon.png';
import loginIcon from '../../assets/login-icon.png';
import logoutIcon from '../../assets/logout-icon.png';
import registerIcon from '../../assets/register-icon.png';
import profileIcon from '../../assets/profile-icon.png';
export default function Navbar() {
    const isLoggedIn = true;
    return (
        <div className="navbar">
            <a className="navbar__link"><img className="link__icon" src={homeIcon}></img></a>
            {
                isLoggedIn ?
                <>
                <a className="navbar__link"><img className="link__icon" src={profileIcon}></img></a>
                <a className="navbar__link"><img className="link__icon" src={logoutIcon}></img></a>
                </>
                :
                <>
                <a className="navbar__link"><img className="link__icon" src={loginIcon}></img></a>
                <a className="navbar__link"><img className="link__icon" src={registerIcon}></img></a>
                </>
                
            }
        </div>
    )
}
