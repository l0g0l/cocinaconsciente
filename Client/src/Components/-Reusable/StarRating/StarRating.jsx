import React, {useState} from "react";
import { FaStar } from 'react-icons/fa'

import starrating from './starrating.scss'



const StarRating = () => {

    const [rating, setRating] = useState (null)
    const [hover, setHover] = useState (null)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i+1;
                return <label>
                    <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick = {() => setRating(ratingValue)} />

                    <FaStar 
                    className="star" 
                    size={100}  
                    color={ratingValue<= (hover || rating) ? "#F2C11F":"#D7D2D2"}
                    onMouseEnter={() => setHover(ratingValue)} 
                    onMouseLeave={() => setHover(null)} />

                </label>


            })}
            {/* <p>The rating is {rating}.</p> */}
        </div>
    )
}

export default StarRating
