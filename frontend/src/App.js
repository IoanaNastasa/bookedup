import React from 'react';
import { Route, Link, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import LandingPage from './containers/Landingpage/Landingpage';
import AuthPage from './containers/AuthPage/AuthPage'
import Main from './containers/Main/Main'
import './global-styles/globals.scss'
import Heading from './components/Header/Header'
function App() {
  return (
    <Router>
      <Switch>
      <Redirect exact from="/" to="/main" />
        <Route exact path="/landingpage" component={LandingPage}></Route>
        <Route path="/auth" component={AuthPage}></Route>
        <Route path="/main" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
