import React, { useState } from 'react'
import './staruserrating.scss'
export default function StarUserRating() {
    const [ rating, setRating ] = useState(0);
    return (
<form>
  <fieldset>
    <span class="star-cb-group">
      <input type="radio" id="rating-5" name="rating" value="5" onClick={(event)=>setRating(event.target.value)}/><label for="rating-5">5</label>
      <input type="radio" id="rating-4" name="rating" value="4"onClick={(event)=>setRating(event.target.value)}/><label for="rating-4">4</label>
      <input type="radio" id="rating-3" name="rating" value="3" onClick={(event)=>setRating(event.target.value)}/><label for="rating-3">3</label>
      <input type="radio" id="rating-2" name="rating" value="2" onClick={(event)=>setRating(event.target.value)}/><label for="rating-2">2</label>
      <input type="radio" id="rating-1" name="rating" value="1" onClick={(event)=>setRating(event.target.value)}/><label for="rating-1">1</label>
      <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" onClick={(event)=>setRating(event.target.value)}/><label for="rating-0">0</label>
    </span>
  </fieldset>
</form>
    )
}
