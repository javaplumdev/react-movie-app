import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

import { CreateContext } from '../context/ContextProvider';

// react router
import { Link } from 'react-router-dom';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper';

function Hero() {
	const { trendingMovies, imagePath } = useContext(CreateContext);

	return (
		<Container className="text-light">
			<h3 className="title-card display-4 fw-bolder w-75 my-5">
				Watch the most trending <br />
				and popular movies right now.
			</h3>
			<h3 className="fs-4 fw-bold my-4">
				Don't miss the chance to watch what's trending today!
			</h3>
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
							<Link to={`/${item.original_title}/${item.id}`}>
								<img className="img-fluid" src={imagePath + item.poster_path} />
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</Container>
	);
}

export default Hero;
