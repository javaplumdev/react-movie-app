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
		<Container>
			<Row className="col-container">
				{isLoading ? (
					<renderLoading />
				) : (
					popularMovies.map((item) => {
						return (
							<Col key={item.id} xs={12} sm={6} md={4} lg={3} className="col">
								<Card style={{ width: '15rem', margin: '.5em' }}>
									<Card.Img
										variant="top"
										src={imagePath + item.poster_path}
										style={{ height: '280px' }}
									/>
									<Card.Body>
										<Card.Title>
											{item.original_title.length > 18 ? (
												<Card.Title>
													{item.original_title.substr(0, 18)}...
												</Card.Title>
											) : (
												<Card.Title>
													{item.original_title.substr(0, 18)}
												</Card.Title>
											)}{' '}
										</Card.Title>
										<Button variant="primary" class="w-100">
											Watch
										</Button>
									</Card.Body>
								</Card>
							</Col>
						);
					})
				)}
			</Row>
		</Container>
	);
}

export default LandingPage;
