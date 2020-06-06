import React from 'react'
import StarPercentageRating from '../StarPercentageRating/StarPercentageRating'
import StarUserRating from '../StarUserRating/StarUserRating'
import './bookpage.scss'
export default function BookPage() {
    const book = {
        id: '123',
        title: 'My book title',
        author: 'Joly Joy',
        rating: '4.1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        cover: 'https://images.unsplash.com/photo-1584528722406-7ff0903fc523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    }
    const userRating = '';

    return (
        <div className="book-page">
            <div className="book-page__book-info grid-container">
                <div className="book-info__cover grid-item-1" style={{ backgroundImage: `url(${book.cover})`}}></div>
                <div className="grid-item-2">
                    <h1 className="book-info__title">{book.title}</h1>
                    <p className="book-info__author">by {book.author}</p>
                    <StarPercentageRating rating={book.rating}></StarPercentageRating>
                </div>
                <div className="book-info__description grid-item-3"><p>{book.description}</p></div>
                <div className="grid-item-4">
                    {
                        userRating ?
                        <div className="book-info_existing-rating">
                            <p>Your rating</p>
                            <StarPercentageRating rating={userRating}></StarPercentageRating>
                        </div>
                        :
                        <div className="book-info_new-rating">
                            <p>Rate this book</p>
                            <StarUserRating></StarUserRating>
                        </div>
                    }
                    <div className="book-info__buttons">
                        <button className="buttons__read">Read</button>
                        <button className="buttons__want-to-read">Want to read</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
