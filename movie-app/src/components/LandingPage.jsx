import React, { useContext } from 'react';
import { CreateContext } from '../context/ContextProvider';

import { Button, Container, Row, Col, Card } from 'react-bootstrap';

function LandingPage() {
	const { popularMovies, isLoading, imagePath } = useContext(CreateContext);

	function renderLoading() {
		return <p>Loading</p>;
	}

	console.log(popularMovies);

	return (
		<Container className="text-light">
			<h3 className="fs-4 fw-bold">Get the most popular movies right now.</h3>
			<div className="cards">
				{isLoading ? (
					<renderLoading />
				) : (
					popularMovies.map((item) => {
						return (
							<div className="card-container bg-dark">
								<img
									src={imagePath + item.poster_path}
									className="image-container"
								/>
								{item.original_title.length > 28 ? (
									<p className="p-2 text-light">
										{item.original_title.substr(0, 28)}...
									</p>
								) : (
									<p className="p-2 text-light">{item.original_title}</p>
								)}
								<button className="watch-button">
									<small>Watch</small>
								</button>
							</div>
						);
					})
				)}
			</div>
		</Container>
	);
}

export default LandingPage;
