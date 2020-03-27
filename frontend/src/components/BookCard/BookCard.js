import React from 'react'
import { Link } from 'react-router-dom'
import './bookcard.scss'
import StarPercentageRating from '../StarPercentageRating/StarPercentageRating'
export default function BookCard(props) {
    return (
        <div className="book-card" id={props.book.id}>
            <div className="book-card__cover" style={{ backgroundImage: `url(${props.book.cover})`}} ></div>
            <div className="book-card__content">
                <h1 className="content__title">{props.book.title}</h1>
                <p className="content__author">by {props.book.author}</p>
                <StarPercentageRating rating={props.book.rating}></StarPercentageRating>
                <Link className="content__read-more" to="/">Read more</Link>
            </div>
        </div>
    )
}
