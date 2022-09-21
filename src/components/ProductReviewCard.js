import React from 'react'
import '../styles/productReviewCard.css'

const ProductReview = ({index, name, price, image, review}) => {
	return (
		<div className='productReviewCard' key={name}>
			<img src={image} alt={`${index} productReview`} />
			<h5>{review}</h5>
			<span>{name}</span>
			<b>{price}</b>
		</div>
	)
}

export default ProductReview