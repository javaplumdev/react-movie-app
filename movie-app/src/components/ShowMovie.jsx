import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CreateContext } from '../context/ContextProvider';
import { Container } from 'react-bootstrap';

function ShowMovie() {
	const { id } = useParams();
	const { api_key, imagePath } = useContext(CreateContext);
	const [showMovies, setShowMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const get_movie_details = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

	function loading() {
		return (
			<div className="text-center mt-5 pt-5">
				<div class="spinner-border text-light" role="status"></div>
			</div>
		);
	}

	useEffect(() => {
		axios.get(get_movie_details).then((response) => {
			setIsLoading(true);
			setShowMovies([response.data]);
		});
	}, []);

	console.log(showMovies);

	return (
		<Container>
			{isLoading
				? showMovies.map((item) => {
						return (
							<div key={item.id} className="text-light mt-5 flex-wrap d-flex ">
								<div className="text-center">
									<img
										src={imagePath + item.poster_path}
										style={{ height: '320px', width: '270px' }}
										className="mx-2 img-fluid rounded"
									/>
								</div>
								<div className="mx-2" style={{ width: '460px' }}>
									<h2 className="display-6 fw-bolder">{item.original_title}</h2>
									<small>{item.vote_average}</small>
									<div className="d-flex flex-wrap">
										{item.genres.map((genre) => {
											return (
												<div
													key={genre.id}
													className="genres bg-primary me-3 rounded my-2"
												>
													<small>{genre.name}</small>
												</div>
											);
										})}
									</div>

									<p>{item.overview}</p>
								</div>
							</div>
						);
				  })
				: loading()}
		</Container>
	);
}

export default ShowMovie;
