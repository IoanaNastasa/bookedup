import React from 'react'
import { Route } from 'react-router-dom'
import './main.scss'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import GenreList from '../../components/GenreList/GenreList'
export default function Main() {
    return (
        <div className="main">
            <Header></Header>
            <Route exact path="/main/browse" component={GenreList}></Route>
            <Navbar></Navbar>
        </div>
    )
}
