import React, { useState } from 'react'
import './staruserrating.scss'
export default function StarUserRating() {
    const [ rating, setRating ] = useState();
    return (
    <div className="rating">
        <input type="radio" value="5" name="rating" id="rating-1" onClick={() => setRating(5)}/>
        <label for="rating-1"></label>
        <input type="radio" value="4" name="rating" id="rating-2" onClick={() => setRating(4)}/>
        <label for="rating-2"></label>
        <input type="radio" value="3" name="rating" id="rating-3" onClick={() => setRating(3)}/>
        <label for="rating-3"></label>
        <input type="radio" value="2" name="rating" id="rating-4" onClick={() => setRating(2)}/>
        <label for="rating-4"></label>
        <input type="radio" value="1" name="rating" id="rating-5" onClick={() => setRating(1)}/>
        <label for="rating-5"></label>
    </div>
    )
}
