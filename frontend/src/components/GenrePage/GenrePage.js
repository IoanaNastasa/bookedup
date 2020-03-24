import React from 'react'
import BookCard from '../BookCard/BookCard'
import './genrepage.scss'

export default function GenrePage(props) {
    const genre = props.match.params.genre;
    const books = Array.from(props.booksData).filter(book => book.genre === genre);
    const bookCards = books.map(book => 
        <BookCard key={book.id} book={book}></BookCard>
    ) 
    return (
        <div className="genre-page">
            <div className="genre-page__books">
            {bookCards}
            </div>
        </div>
    )
}
