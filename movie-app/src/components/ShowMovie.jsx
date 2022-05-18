import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CreateContext } from '../context/ContextProvider';
import { Container } from 'react-bootstrap';

import { BsFillStarFill } from 'react-icons/bs';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

import YoutubeComponent from './YoutubeComponent';

function ShowMovie() {
	const { id } = useParams();
	const {
		api_key,
		imagePath,
		internationalNumberFormat,
		loading,
		youtubeFunction,
	} = useContext(CreateContext);
	const [showMovies, setShowMovies] = useState([]);
	const [discoverMovies, setDiscoverMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [youtubeState, setYoutubeState] = useState([]);
	const [movieReviewState, setMovieReviewState] = useState([]);

	const get_movie_details = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;
	const discover_movies_url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`;
	const video_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`;
	const movie_review_url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`;

	useEffect(() => {
		fetchShowMovie();
		axios.get(get_movie_details).then((response) => {
			setIsLoading(true);
			setShowMovies([response.data]);
		});
		axios.get(discover_movies_url).then((response) => {
			setIsLoading(true);
			setDiscoverMovies(response.data.results);
		});
		axios.get(video_url).then((response) => {
			setYoutubeState(response.data.results);
		});
		axios.get(movie_review_url).then((response) => {
			setMovieReviewState(response.data.results);
		});
	}, []);

	console.log(movieReviewState);

	function fetchShowMovie(id) {
		const get_movie_details = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;
		const discover_movies_url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`;
		const video_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`;
		const movie_review_url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`;

		axios.get(get_movie_details).then((response) => {
			setIsLoading(true);
			setShowMovies([response.data]);
		});

		axios.get(discover_movies_url).then((response) => {
			setIsLoading(true);
			setDiscoverMovies(response.data.results);
		});

		axios.get(video_url).then((response) => {
			setYoutubeState(response.data.results);
		});

		axios.get(movie_review_url).then((response) => {
			setMovieReviewState(response.data.results);
		});

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	const youtubeID = youtubeState.slice(0, 1).map((item) => {
		return item.key;
	});

	return (
		<Container>
			<div className="my-3">
				<YoutubeComponent youtubeID={youtubeID} />
			</div>

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

			<div className="text-light">
				<h5 className="mt-4">Movie reviews:</h5>
				<div className="row">
					{movieReviewState.slice(0, 3).map((item) => {
						return (
							<div className="col-md-4 bg-dark p-3 my-2">
								<div className="d-flex align-items-center">
									{item.author_details.avatar_path === null ? (
										<img
											src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
											style={{ height: '50px', width: '50px' }}
											className="rounded-circle me-3"
										/>
									) : (
										<img
											src={item.author_details.avatar_path.substr(1)}
											style={{ height: '50px', width: '50px' }}
											className="rounded-circle me-3"
										/>
									)}

									<div>
										<small className="lead fw-bold">
											{item.author_details.username}
										</small>
										<br></br>
										<small>{item.created_at}</small>
									</div>
								</div>
								<div className="mt-3">
									{item.content.length > 200 ? (
										<p>{item.content.substr(0, 200)}...</p>
									) : (
										<p>{item.content}</p>
									)}
								</div>
							</div>
						);
					})}
				</div>
				<div className="text-end mt-3">
					<p className="fw-bold">See more</p>
				</div>
			</div>

			<h3 className="text-light mt-3">Discover related movies</h3>
			<div className="cards ">
				{discoverMovies.map((item) => {
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
								<button
									className="watch-button"
									onClick={() => fetchShowMovie(item.id)}
								>
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

export default ShowMovie;
