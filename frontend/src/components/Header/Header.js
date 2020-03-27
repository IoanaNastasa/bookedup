import React, { useContext } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import loginIcon from '../../assets/login-icon.png';
import logoutIcon from '../../assets/logout-icon.png';
import registerIcon from '../../assets/register-icon.png';
import profileIcon from '../../assets/profile-icon.png';
import UserContext from '../../UserContext';
export default function Header(props) {
    const { user } = useContext(UserContext);
    return (
        <div className="header">
            <Link to="/main/browse" className="header__home-link">
                <h1 className="home-link__logo">BookedUp</h1>
            </Link>
            <div className="header__search">
                <input placeholder="Search books"></input>
            </div>
            {
                user ? 
                <div className="header__nav">
                    <Link className="nav__link" to="/landingpage" href="#">
                        Account               
                        <img className="link__icon" alt="profile icon" src={profileIcon}></img>
                    </Link>
                    <Link className="nav__link" to="/main/browse" onClick={props.handleLogout}>
                        Log out              
                        <img className="link__icon" alt="logout icon" src={logoutIcon}></img>
                    </Link>
                </div>
                :
                <div className="header__nav">
                <Link to="/auth/login" className="nav__link"  href="#">
                    Log In              
                    <img className="link__icon" alt="login icon" src={loginIcon}></img>
                </Link>
                <Link to="/auth/register" className="nav__link"  href="#">
                    Register              
                    <img className="link__icon" alt="register icon" src={registerIcon}></img>
                </Link>
            </div>
            }
            
        </div>
    )
}
// { isLoggedIn ? "../../assets/login-icon.png" : "../../assets/login-icon.png"}