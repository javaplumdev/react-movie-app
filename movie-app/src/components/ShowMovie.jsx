import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CreateContext } from '../context/ContextProvider';
import { Container } from 'react-bootstrap';

function ShowMovie() {
	const { id } = useParams();
	const { api_key, imagePath } = useContext(CreateContext);
	const [showMovies, setShowMovies] = useState([]);

	const get_movie_details = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

	useEffect(() => {
		axios.get(get_movie_details).then((response) => {
			setShowMovies([response.data]);
		});
	}, []);

	return (
		<Container>
			{showMovies.map((item) => {
				return (
					<div key={item.id} className="text-light">
						<img
							src={imagePath + item.poster_path}
							style={{ height: '320px' }}
						/>
						<p>{item.original_title}</p>
					</div>
				);
			})}
		</Container>
	);
}

export default ShowMovie;
