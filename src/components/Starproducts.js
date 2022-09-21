import React from 'react'
import '../styles/StarProducts.css'

const Starproducts = ({starProduct}) => {
	return (
		<div className='startproducts'>
			<div><a href={starProduct[0].url}><img src={starProduct[0].image} alt="sp1" /></a></div>
			<div>
				<a href={starProduct[1].url}><img src={starProduct[1].image} alt="sp1" /></a>
				<a href={starProduct[2].url}><img src={starProduct[2].image} alt="sp1" /></a>
				<a href={starProduct[3].url}><img src={starProduct[3].image} alt="sp1" /></a>
			</div>
		</div>
	)
}

export default Starproducts