import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import backIcon from '../../assets/arrow-back-icon.png';
import './authpage.scss'
export default function AuthPage() {
    return (
        <div className="auth-page">
            <Link to="/landingpage" className="auth-page__back" href="#" ><img className="back__icon" src={backIcon} alt="back icon"></img>Go Back</Link>
            <div className="auth-page__content">
                <Switch>
                    <Redirect exact from="/auth" to="/auth/register"></Redirect>
                    <Route exact path="/auth/register" component={RegisterForm}></Route>
                    <Route exact path="/auth/login" component={LoginForm}></Route>
                </Switch>      
                <div className="svg-container">
                    <img className="svg-container__img" src={require("../../assets/auth-page.svg")} alt=" "/>
                </div>
            </div>
        </div>
    )
}
