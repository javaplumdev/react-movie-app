import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const CreateContext = createContext();

export function ContextProvider({ children }) {
	const api_key = `3774131603660110c024a22c82fb41fe`;
	const popular_movies_url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1&include_video=true`;

	const [popularMovies, setPopularMovies] = useState([]);

	function fetchApi() {
		axios.get(popular_movies_url).then((response) => {
			setPopularMovies(response.data.results);
		});
	}

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<CreateContext.Provider value={{ popularMovies }}>
			{children}
		</CreateContext.Provider>
	);
}
