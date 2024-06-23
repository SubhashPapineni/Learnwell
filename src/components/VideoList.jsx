import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VideoList.css';
import image from '../assets/3793250.jpg'

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos?.map(video => (
        <Link to={`/video/${video.id}`} key={video.id} className="video-item">
          <div className="video-thumbnail">
            <img src={image} alt={video.title} />
          </div>
          <div className="video-info">
            <p className="video-title">{video.title}</p>
            <p className="video-user">By: {video.user_id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;

