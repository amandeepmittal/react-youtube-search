import React from 'react';
import './VideoListItem';

const VideoListItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<div className="box related-list">
			<article className="media related-card">
				<div className="media-left">
					<figure className="image">
						<img src={imageUrl} alt="" onClick={() => onVideoSelect(video)} />
					</figure>
				</div>
				&nbsp;
				<div className="media-content">
					<div className="content">
						<p>
							<span onClick={() => onVideoSelect(video)}>
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
