import React from 'react';
import { ReactSVG } from 'react-svg';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import authSVG from '../../assets/auth-page.svg';
import backIcon from '../../assets/back-icon.png';
import './authpage.scss'
export default function AuthPage() {
    // render login or register based on path param or smth
    const page = 'register';
    return (
        <div className="auth-page">
            <a className="auth-page__back"><img className="back__icon" src={backIcon}></img>Back</a>
            <div className="auth-page__content">
                {
                    page === 'register' ?
                    <RegisterForm></RegisterForm>
                    :
                    <LoginForm></LoginForm>
                }
                <div className="svg-container">
                    <ReactSVG src={authSVG}></ReactSVG>
                </div>
            </div>
        </div>
    )
}
