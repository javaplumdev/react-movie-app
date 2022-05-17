import { Container } from 'react-bootstrap';

function Footer() {
	return (
		<Container>
			<div className="text-light text-center my-5 py-1 d-flex flex-column">
				<small>
					All the materials used for this are for my own personal project and
					self learning only. It won't use for other reasons.{' '}
				</small>
				<small>©Boomflix 2022</small>
			</div>
		</Container>
	);
}

export default Footer;
