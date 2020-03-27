import React from 'react'
import StarPercentageRating from '../StarPercentageRating/StarPercentageRating'
import StarUserRating from '../StarUserRating/StarUserRating'
export default function BookPage() {
    // const [ rating, ]
    const book = {
        id: '123',
        title: 'My book title',
        author: 'Joly Joy',
        rating: '4.1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        cover: 'https://images.unsplash.com/photo-1584528722406-7ff0903fc523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    }
    const userRating = '';

    return (
        <div className="book-page">
            <div className="book-page__book-info">
                <div className="book-info__cover" style={{ backgroundImage: `url(${book.cover})`}}></div>
                <h1 className="book-info__title">{book.title}</h1>
                <p className="book-info__author">by {book.author}</p>
                <StarPercentageRating rating={book.rating}></StarPercentageRating>
                <p className="book-info__description">{book.description}</p>
                {
                    userRating ?
                    <div>
                        <p>Your rating</p>
                        <StarPercentageRating rating={userRating}></StarPercentageRating>
                    </div>
                    :
                    <div>
                    <p>Rate this book</p>
                    <StarUserRating></StarUserRating>
                    </div>
                }
                <button>Read</button>
                <button>Want to read</button>
            </div>
            BookPage
        </div>
    )
}
