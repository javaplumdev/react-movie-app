import React, { useContext } from 'react';

import { CreateContext } from '../context/ContextProvider';

function LandingPage() {
	const { popularMovies } = useContext(CreateContext);

	console.log(popularMovies);

	return (
		<>
			<p>This is landing page</p>
		</>
	);
}

export default LandingPage;
