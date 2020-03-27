import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './main.scss'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import GenreList from '../../components/GenreList/GenreList'
import GenrePage from '../../components/GenrePage/GenrePage'
import BookPage from '../../components/BookPage/BookPage'
import UserContext from '../../UserContext';
export default function Main() {
    const [booksData, setBooksData] = useState({ books: [] });
    const { setUser } = useContext(UserContext);
    useEffect(() => {
      const fetchData = async() => {
        let response = await fetch('http://localhost:5000/books', {credentials: 'include'});
        let result = await response.json();
        setBooksData(result)
      };
      fetchData();
    }, []);
    const handleLogout = () => {
      console.log('logout');
      const fetchLogout = async() => {
        let response = await fetch('http://localhost:5000/auth/logout', {credentials: 'include'});
        let result = await response.json();
        setUser(''); // removes user data from context
      };
      fetchLogout();
    }
    return (
        <div className="main">
            <Header handleLogout={handleLogout}></Header>
            <Switch>
              <Route exact path="/main/browse" component={GenreList}></Route>
              <Route exact path="/main/book" component={BookPage}></Route>
              <Route exact path="/main/:genre" render={(props) => <GenrePage {...props} booksData={booksData}/>}></Route>
              <Redirect exact path="/main" to="/main/browse" component={GenreList}></Redirect>
            </Switch>
            <Navbar handleLogout={handleLogout}></Navbar>
        </div>
    )
}
