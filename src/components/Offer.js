import React from 'react'

const Offer = ({value, src, link}) => {
	return (
		<a href={link}><img src={src} alt={`$value offer`} /></a>
	)
}

export default Offer