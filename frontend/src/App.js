import React from 'react';
import { Route, Link, BrowserRouter as Router, Redirect } from 'react-router-dom'
import LandingPage from './containers/Landingpage/Landingpage';
import AuthPage from './containers/AuthPage/AuthPage'
import Main from './containers/Main/Main'
import './global-styles/globals.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/landingpage" component={LandingPage}></Route>
        <Route exact path="/auth">
          <Redirect to="/landingpage"></Redirect>
        </Route>
        <Route path="/auth" component={AuthPage}></Route>
        <Route path="/main" component={Main}></Route>
      </div>
    </Router>
  );
}

export default App;
