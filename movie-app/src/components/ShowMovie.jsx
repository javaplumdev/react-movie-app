import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CreateContext } from '../context/ContextProvider';
import { Container } from 'react-bootstrap';

import { BsFillStarFill } from 'react-icons/bs';

function ShowMovie() {
	const { id } = useParams();
	const { api_key, imagePath, internationalNumberFormat } =
		useContext(CreateContext);
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
									<p>"{item.tagline}"</p>
									<div className="d-flex align-items-center mb-2">
										<div className="me-1">
											<BsFillStarFill className="fs-6 me-1" />
											<small>{item.vote_average}</small>
										</div>
										<small>
											{internationalNumberFormat.format(item.vote_count)} counts
										</small>
									</div>
									<small>Runtime: {item.runtime} minutes</small>
									<div className="d-flex flex-wrap mb-3">
										{item.genres.map((genre) => {
											return (
												<div
													key={genre.id}
													className="me-2 bg-primary p-2 rounded mt-3 m-1"
												>
													<small>{genre.name}</small>
												</div>
											);
										})}
									</div>
									<p>{item.overview}</p>

									<h5 className="mt-4">Production Companies</h5>
									<div className="d-flex flex-wrap">
										{item.production_companies.map((item) => {
											return (
												<small
													key={item.id}
													className="me-2 bg-primary p-2 rounded m-1"
												>
													{item.name}
												</small>
											);
										})}
									</div>

									<h5 className="mt-4">Movie spent and earned:</h5>
									<p>
										Movie budget: $
										{internationalNumberFormat.format(item.budget)}
										<br></br>
										Movie revenue: $
										{internationalNumberFormat.format(item.revenue)}
									</p>
								</div>
							</div>
						);
				  })
				: loading()}
		</Container>
	);
}

export default ShowMovie;
