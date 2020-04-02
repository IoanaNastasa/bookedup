import React from 'react'
import BookCard from '../BookCard/BookCard'
import './genrepage.scss'

export default function GenrePage(props) {
    const genre = props.match.params.genre;
    const books = Array.from(props.booksData).filter(book => book.genre === genre);
    const bookCards = books.map(book => 
        <BookCard key={book.id} book={book}></BookCard>
    )
    const descText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    return (
        <div className="genre-page">
            <div className="genre-page__books">
            {bookCards}
            {bookCards}
            {bookCards}
            {bookCards}
            {bookCards}
            {bookCards}
            {bookCards}
            {bookCards}
            </div>
            <div className="genre-page__desc">
                    <span className="desc__text">{descText}</span>
                    {/* <img className="desc__img" src={require("../../assets/genre-page.svg")} alt=" "/> */}
            </div>
        </div>
    )
}
