import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Banner.css';

const Banner = ({banner}) => {
	return (
		<Carousel fade>
			{banner.end.map((item, index)=>(
				<Carousel.Item id="banner" keyboard={true} key={item.name}>
					<img className="d-block w-100" src={item.image} alt={`${index} banner`} />
					<Carousel.Caption className='pb-5'>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
						<p>{item.source}</p>
       		</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default Banner