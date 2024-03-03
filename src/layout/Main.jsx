import Movies from '../components/Movies';

import Search from '../components/Search';

import React from 'react';
export default class Main extends React.Component {
	state = {
		moviesArr: [],
	};

	componentDidMount() {
		fetch('https://www.omdbapi.com/?apikey=dbd3d27a&s=titanic')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ moviesArr: data.Search });
			});
	}

	reRenderMovies(value) {
		fetch(`https://www.omdbapi.com/?apikey=dbd3d27a&s=${value}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ moviesArr: data.Search });
			});
	}

	render() {
		console.log(this.state.moviesArr);

		const { moviesArr } = this.state;

		console.log(moviesArr.length);

		return (
			<>
				<Search func={this.reRenderMovies} />
				{moviesArr.length ? <Movies movieArr={moviesArr} /> : <h3> loading</h3>}
			</>
		);
	}
}
