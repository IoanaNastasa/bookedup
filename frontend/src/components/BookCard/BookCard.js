import React from 'react'
import './bookcard.scss'
export default function BookCard() {
    const { title, author, rating, id} = [ 'My perfect cat', 'Eli Fig', '4', '123' ];
    return (
        <div id={id}>
            <img></img>
            <div>
                <h1>{title}</h1>
                <p>by {author}</p>
                <p>Star rating</p>
                <Link to="/">Read more</Link>
            </div>
        </div>
    )
}
