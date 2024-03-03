import React from 'react';

function Movie(props) {
	console.log(props);
	const { Title: title, Year: year, imdbId: id, Type: type, Poster: poster } = props;

	return (
		<div classNameName="movie card">
			<div className="card">
				<div className="card-image">
					<img src={poster} />
					<span className="card-title">{title}</span>
				</div>
				<div className="card-content">
					<p>{type}</p>
				</div>
				<div className="card-action">
					{year} <span>Year of Film</span>
				</div>
			</div>
		</div>
	);
}

export { Movie };
