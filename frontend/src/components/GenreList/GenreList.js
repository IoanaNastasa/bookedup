import React from 'react'
import './genrelist.scss'
import '../../assets/cooking-genre.png'
import { Link } from 'react-router-dom'
export default function GenreList({ match }) {
    return (
    <div className="genre-list">
        <div className="genre-list__container">
            <Link className="container__cooking" to="/main/cooking">
                <img src={require("../../assets/cooking-genre.png")} alt="genre illustration"></img>
            </Link>
            <Link className="container__selfhelp" to="/main/selfhelp">
                <img src={require("../../assets/selfhelp-genre.png")} alt="genre illustration"></img>
            </Link>
            <Link className="container__fantasy" to="/main/fansy">
                <img src={require("../../assets/fantasy-genre.png")} alt="genre illustration"></img>
            </Link>
            <Link className="container__romance" to="/main/romance">
                <img src={require("../../assets/romance-genre.png")} alt="genre illustration"></img>
            </Link>
            <Link className="container__comedy" to="/main/comedy">
                <img src={require("../../assets/comedy-genre.png")} alt="genre illustration"></img>
            </Link>
            <Link className="container__art" to="/main/art">
                <img src={require("../../assets/art-genre.png")} alt="genre illustration"></img>
            </Link>
        </div>
    </div>
    )
}
