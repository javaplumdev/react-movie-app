import { useParams } from 'react-router-dom';

function ShowMovie() {
	const { id } = useParams();

	return (
		<>
			<p>Tangina</p>
		</>
	);
}

export default ShowMovie;
