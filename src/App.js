import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyANl999ACEi82UvWilvXMclcow8WbikDKY';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [], // holds 5 videos fetched from API
			selectedVideo: null // selected video is null, default set below ln:28
		};

		this.videoSearch('reactjs'); // default search term
	}

	// function for search term
	videoSearch(term) {
		YTSearch(
			{
				key: API_KEY,
				term: term
			},
			videos => {
				this.setState({ videos: videos, selectedVideos: videos[0] }); // through states setting the default video
			}
		);
	}

	render() {
		// for consistent ui such that it re-renders after 300ms on search
		const videoSearch = debounce(term => {
			this.videoSearch(term);
		}, 300);
		return (
			<div className="container">
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail/>
			</div>
		);
	}
}

export default App;
