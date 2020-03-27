import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import homeIcon from '../../assets/home-icon.png';
import loginIcon from '../../assets/login-icon.png';
import logoutIcon from '../../assets/logout-icon.png';
import registerIcon from '../../assets/register-icon.png';
import profileIcon from '../../assets/profile-icon.png';
import UserContext from '../../UserContext';
export default function Navbar(props) {
    const { user } = useContext(UserContext);
    return (
        <div className="navbar">
            <Link to="/main/browse" className="navbar__link"><img className="link__icon" alt="home icon" src={homeIcon}></img></Link>
            {
                user ?
                <>
                <Link to="/landingpage" className="navbar__link"><img className="link__icon" alt="profile icon" src={profileIcon}></img></Link>
                <Link to="/main/browse" className="navbar__link"><img className="link__icon" alt="logout icon" src={logoutIcon} onClick={props.handleLogout}></img></Link>
                </>
                :
                <>
                <Link to="/auth/login" className="navbar__link"><img className="link__icon" alt="login icon" src={loginIcon}></img></Link>
                <Link to="/auth/register" className="navbar__link"><img className="link__icon" alt="register icon" src={registerIcon}></img></Link>
                </>
                
            }
        </div>
    )
}
