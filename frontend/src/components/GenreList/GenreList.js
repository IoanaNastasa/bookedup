import React from 'react'
import './genrelist.scss'
import '../../assets/cooking-genre.png'
import { Link } from 'react-router-dom'
export default function GenreList() {
    return (
        <div className="genre-list">
        <div className="genre-list__container">
            <Link className="container__cooking" to="/">
                <img src={require("../../assets/cooking-genre.png")}></img>
            </Link>
            <Link className="container__selfhelp" to="/">
                <img src={require("../../assets/selfhelp-genre.png")}></img>
            </Link>
            <Link className="container__fantasy" to="/">
                <img src={require("../../assets/fantasy-genre.png")}></img>
            </Link>
            <Link className="container__romance" to="/">
                <img src={require("../../assets/romance-genre.png")}></img>
            </Link>
            <Link className="container__comedy" to="/">
                <img src={require("../../assets/comedy-genre.png")}></img>
            </Link>
            <Link className="container__art" to="/">
                <img src={require("../../assets/art-genre.png")}></img>
            </Link>
        </div>
        </div>
    )
}
