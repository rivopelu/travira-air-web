import React from 'react'
import StarRatings from 'react-star-ratings/build/star-ratings'

const StartRating = ({ rate }) => {
    return (
        <StarRatings
            rating={rate}
            starRatedColor="#f58f0a"
            numberOfStars={5}
            starDimension={'20px'}
            starSpacing={'1px'}
            name='rating'
        />
    )
}

export default StartRating