import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const CreateContext = createContext();

export function ContextProvider({ children }) {
	const imagePath = `https://image.tmdb.org/t/p/w342`;

	const api_key = `3774131603660110c024a22c82fb41fe`;
	const popular_movies_url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1&include_video=true`;
	const trending_movies_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`;

	const [trendingMovies, setTrendingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const internationalNumberFormat = new Intl.NumberFormat('en-US');

	function fetchApi() {
		setIsLoading(true);
		axios.get(popular_movies_url).then((response) => {
			setPopularMovies(response.data.results);
		});
		axios.get(trending_movies_url).then((response) => {
			setTrendingMovies(response.data.results);
		});
		setIsLoading(false);
	}

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<CreateContext.Provider
			value={{
				popularMovies,
				isLoading,
				imagePath,
				trendingMovies,
				api_key,
				setIsLoading,
				isLoading,
				internationalNumberFormat,
			}}
		>
			{children}
		</CreateContext.Provider>
	);
}
