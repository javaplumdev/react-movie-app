// js
import React from 'react';

function YoutubeComponent({ youtubeID }) {
	return (
		<iframe
			id="player"
			type="text/html"
			width="100%"
			height="390"
			src={`http://www.youtube.com/embed/${youtubeID}?autoplay=1&loop=1&autopause=0`}
			allow="autoplay; fullscreen"
			allowFullScreen
		></iframe>
	);
}

export default YoutubeComponent;
