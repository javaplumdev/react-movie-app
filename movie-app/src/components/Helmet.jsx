import { Helmet } from 'react-helmet';

function ReactHelmet() {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>Movie App</title>
			<link rel="canonical" href="http://mysite.com/example" />
			<link rel="icon" type="image/png" href="flavicon.ico" size="16x16" />
		</Helmet>
	);
}

export default ReactHelmet;
