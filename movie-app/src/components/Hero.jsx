import React, { useRef, useContext } from 'react';
import { Container } from 'react-bootstrap';

import { CreateContext } from '../context/ContextProvider';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper';

import image from '../images/polar-film-show.png';

function Hero() {
	const { trendingMovies, imagePath } = useContext(CreateContext);

	return (
		<Container className="text-light">
			<div className="my-5">
				<h3 className="display-4 fw-bolder w-50">
					Watch the most trending <br />
					and popular movies right now.
				</h3>
				<img src={image} alt="sample" />
			</div>
			<Swiper
				spaceBetween={5}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Autoplay]}
				className="mySwiper"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
					// when window width is >= 640px
					320: {
						width: 320,
						slidesPerView: 1,
					},
					640: {
						width: 640,
						slidesPerView: 2,
					},
					// when window width is >= 768px
					768: {
						width: 768,
						slidesPerView: 4,
					},
				}}
			>
				{trendingMovies.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<img className="img-fluid" src={imagePath + item.poster_path} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</Container>
	);
}

export default Hero;
