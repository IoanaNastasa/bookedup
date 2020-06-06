import React from 'react'
import './starpercentagerating.scss'
export default function StarPercentageRating(props) {
    let rating = 3.3;
    console.log('pra', props.rating);
    let style = { "--rating": props.rating };
    return (
        <div className="Stars" style={style} aria-label="Rating of this product is 2.3 out of 5."></div>
    )
}
