import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyANl999ACEi82UvWilvXMclcow8WbikDKY';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('reactjs');
	}

	videoSearch(term) {
		YTSearch(
			{
				key: API_KEY,
				term: term
			},
			videos => {
				this.setState({ videos: videos, selectedVideos: videos[0] });
			}
		);
	}

	render() {
		const videoSearch = debounce(term => {
			this.videoSearch(term);
		}, 300);
		return (
			<div className="container">
				<SearchBar onSearchTermChange={videoSearch} />
			</div>
		);
	}
}

export default App;
