import React, { useContext } from 'react';

import { CreateContext } from '../context/ContextProvider';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function ResultMovie() {
	const { queriedMovies, imagePath, movieName, loading, isLoading } =
		useContext(CreateContext);

	return (
		<Container>
			{queriedMovies.length > 1 ? (
				<>
					<h3 className="text-light my-4">Search results for {movieName}</h3>
					<div className="cards">
						{queriedMovies.map((item) => {
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
				</>
			) : (
				<p className="text-light lead mt-5 text-center my-5 py-5">
					There are no results
				</p>
			)}
		</Container>
	);
}

export default ResultMovie;
