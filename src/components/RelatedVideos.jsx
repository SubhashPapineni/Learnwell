import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RelatedVideos.css';
import image from '../assets/6249625.jpg'

const RelatedVideos = ({ videos }) => {
  return (
    <div className="related-videos">
      <h2>Related Videos</h2>
      <div className="videos-list">
        {videos.map(video => (
          <Link to={`/video/${video.id}`} key={video.id} className="video-thumbnail">
            <img src={image} alt={video.title} />
            <div className="video-info">
              <p className="video-title">{video.title}</p>
              <p className="video-user">By: {video.user_id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;
