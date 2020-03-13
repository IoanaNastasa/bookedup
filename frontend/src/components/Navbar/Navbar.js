import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import homeIcon from '../../assets/home-icon.png';
import loginIcon from '../../assets/login-icon.png';
import logoutIcon from '../../assets/logout-icon.png';
import registerIcon from '../../assets/register-icon.png';
import profileIcon from '../../assets/profile-icon.png';
export default function Navbar() {
    const isLoggedIn = false;
    return (
        <div className="navbar">
            <Link to="/main/browse" className="navbar__link"><img className="link__icon" src={homeIcon}></img></Link>
            {
                isLoggedIn ?
                <>
                <Link to="/landingpage" className="navbar__link"><img className="link__icon" src={profileIcon}></img></Link>
                <Link to="/main/browse" className="navbar__link"><img className="link__icon" src={logoutIcon}></img></Link>
                </>
                :
                <>
                <Link to="/auth/login" className="navbar__link"><img className="link__icon" src={loginIcon}></img></Link>
                <Link to="/auth/register" className="navbar__link"><img className="link__icon" src={registerIcon}></img></Link>
                </>
                
            }
        </div>
    )
}
