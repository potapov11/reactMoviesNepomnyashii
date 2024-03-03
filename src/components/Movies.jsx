import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
	console.log(props);

	const { movieArr } = props;

	// const { Title: title, Year: year, imdbId: id, Type: type, Poster: poster } = props;

	return (
		<div className="movies">
			{movieArr.map((movie) => {
				return <Movie {...movie} />;
			})}
		</div>
	);
}

export default Movies;
