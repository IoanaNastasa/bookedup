import React from 'react'
import { useParams } from 'react-router-dom'

export default function GenrePage(props) {
    const genre = props.match.params.genre;
    const filterByGenre = Array.from(props.booksData).filter(book => book.genre === genre);
    return (
        <div>
        </div>
    )
}
