import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

import './starrating.scss'



const StarRating = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return <label>
                    <input
                        className="radiostar"
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)} />

                    <FaStar
                        className="star"
                        size={20}
                        color={ratingValue <= (hover || rating) ? "#F2C11F" : "#D7D2D2"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)} />

                </label>


            })}
            {/* <p>The rating is {rating}.</p> */}
        </div>
    )
}

export default StarRating
