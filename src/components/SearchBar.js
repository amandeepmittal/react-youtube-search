import React, { Component } from 'react';
import './SearchBar.css';
export default class SearchBar extends Component {
	render() {
		return (
			<div className="control search-bar">
				<h1 className="title is-1">
					<span className="fa fa-youtube-play" />&nbsp; Youtube InstaSearch
				</h1>
				<input
					className="input"
					type="text"
					placeholder="Search a YouTube video..."
				/>
			</div>
		);
	}
}
