import React , { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import UserContext from './UserContext';

export default function PrivateRoute({ component: Component, ...routeProps}) {
    const { user, setUser } = useContext(UserContext);
    return (
        <Route
            {...routeProps}
            render={props => (
                !user ? 
                <Component {...props}></Component>
                :
                <Redirect to="/main/browse"></Redirect>
            )}
        />
    )
}
