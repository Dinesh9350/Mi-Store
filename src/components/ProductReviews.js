import React from 'react'
import ProductReviewCard from './ProductReviewCard.js';
import '../styles/ProductReviews.css';

const ProductReviews = ({productReviews}) => {
	return (
		<div className='productReviews'>
			{productReviews.map((item, index)=>(
				<ProductReviewCard key={item.name} name={item.name} price={item.price} review={item.review} image={item.image}/>
			))}
		</div>
	)
}

export default ProductReviews