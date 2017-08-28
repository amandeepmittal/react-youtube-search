import React from 'react';
import './VideoListItem';

const VideoListItem = ({ video, selectedVideo }) => {
	const imageUrl = video.snippet.thumbnail.default.url;
	const title = video.snippet.title;

	return (
		<div className="box related-list">
			<article className="media related-card">
				<div className="media-left">
					<figure className="image">
						<img src={imageUrl} />
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<p>
							<span className="video-title">
								{title}
							</span>
						</p>
					</div>
				</div>
			</article>
		</div>
	);
};

export default VideoListItem;
