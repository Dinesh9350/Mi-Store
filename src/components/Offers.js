import React from 'react'
import Offer from './Offer.js';
import '../styles/Offers.css'

const Offers = ({offer}) => {
	return (
		<div className='offerSection'>
			{offer.map((item, index)=>(
				//key is used to remove error from console
				 <Offer key={item.image} value={index} src={item.image} link={item.url} />
		
			))}
		</div> 
	)
}


export default Offers