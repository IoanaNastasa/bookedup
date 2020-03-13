import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import LandingPage from './containers/Landingpage/Landingpage';
import AuthPage from './containers/AuthPage/AuthPage'
export default function Routing() {
    return (
        <div>
            <Route path='/auth' component={AuthPage}></Route>
            <Route path='/landing-page' component={LandingPage}></Route>
            <Route path='/' component={App}></Route>
        </div>
    )
}
