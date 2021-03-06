import React, { useContext } from 'react';
import { CreateContext } from '../context/ContextProvider';

import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function LandingPage() {
	const { popularMovies, isLoading, imagePath } = useContext(CreateContext);

	return (
		<Container className="text-light mb-5">
			<h3 className="fs-4 fw-bold my-4">
				Get the most popular movies right now.
			</h3>

			<div className="cards">
				{popularMovies.map((item) => {
					return (
						<div key={item.id} className="card-container bg-dark">
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
							<Link to={`/${item.original_title}/${item.id}`}>
								<button className="watch-button">
									<small>Watch</small>
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		</Container>
	);
}

export default LandingPage;
