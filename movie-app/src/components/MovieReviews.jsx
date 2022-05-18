import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CreateContext } from '../context/ContextProvider';
import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function MovieReview() {
	const { id } = useParams();

	const { api_key } = useContext(CreateContext);

	const movie_review_url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`;

	const [movieReviewState, setMovieReviewState] = useState([]);

	useEffect(() => {
		axios.get(movie_review_url).then((response) => {
			setMovieReviewState(response.data.results);
		});
	}, []);

	console.log(movieReviewState);

	return (
		<Container>
			<div className="text-light">
				<h5 className="mt-4">Movie reviews:</h5>
				<div>
					{movieReviewState.length > 1 ? (
						<>
							{movieReviewState.map((item) => {
								return (
									<div className="bg-dark p-3 my-2 m-1">
										<div className="d-flex align-items-center">
											{item.author_details.avatar_path === null ||
											!item.author_details.avatar_path.includes(
												'/https://www.gravatar.com/avatar'
											) ? (
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
											<p>{item.content}</p>
										</div>
									</div>
								);
							})}
						</>
					) : (
						<p className="text-center lead">No movie reviews yet :( </p>
					)}
				</div>
			</div>
		</Container>
	);
}

export default MovieReview;
