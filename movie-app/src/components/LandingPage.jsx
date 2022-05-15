import React, { useContext } from 'react';

import { CreateContext } from '../context/ContextProvider';

function LandingPage() {
	const { popularMovies } = useContext(CreateContext);

	console.log(popularMovies);

	return (
		<>
			{popularMovies.map((item) => {
				return (
					<div key={item.id}>
						<p>{item.original_title}</p>
					</div>
				);
			})}
		</>
	);
}

export default LandingPage;
