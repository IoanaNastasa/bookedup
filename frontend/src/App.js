import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import LandingPage from './containers/Landingpage/Landingpage';
import AuthPage from './containers/AuthPage/AuthPage'
import Main from './containers/Main/Main'
import UserContext from './UserContext';
import PrivateRoute from './PrivateRoute';
import './global-styles/globals.scss'
function App() {
  const [user, setUser] = useState('');
  const value = { user, setUser };
  useEffect(() => {
    const fetchSessionUser = async() => {
      const response = await fetch('http://localhost:5000/auth/currentuser', {credentials: 'include'});
      const result = await response.json();
      setUser(result);
    };
    fetchSessionUser();
  }, []);
  return (
    <UserContext.Provider value={value}>
      <Router>
        <Switch>
        <Redirect exact from="/" to="/main" />
          <PrivateRoute path="/landingpage" component={LandingPage}></PrivateRoute>
          <PrivateRoute path="/auth" component={AuthPage}></PrivateRoute>
          {/* <Route exact path="/landingpage" component={LandingPage}></Route> */}
          {/* <Route path="/auth" component={AuthPage}></Route> */}
          <Route path="/main" component={Main}></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
