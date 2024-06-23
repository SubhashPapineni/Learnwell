import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../components/VideoList';
import CommentSection from '../components/CommentSection';
import RelatedVideos from '../components/RelatedVideos';
import '../styles/VideoPage.css';
import logo from '../assets/FULL_LOGO_DARK.png'; 
import UploadButton from '../components/UploadButton';
import '../styles/HomePage.css';

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // fetchVideo(searchQuery);
  };

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos/single?video_id=${id}`);
        console.log("response", response.data.video)
        setVideo(response.data.video);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    const fetchRelatedVideos = async () => {
      try {
        const response = await axios.get('https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=Subhash'); // Replace with your endpoint to fetch related videos
        setRelatedVideos(response.data.videos);
      } catch (error) {
        console.error('Error fetching related videos:', error);
      }
    };

    fetchVideo();
    fetchRelatedVideos();
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }
const embedUrl = `https://www.youtube.com/embed/${video.video_url.split('v=')[1]}`;
return (
  <div>
     <div className="home-page">
      <header className="header">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <img src={logo} alt="Learnwell Logo" className="logo" />
        <UploadButton />
      </header>
  </div>
    <div className="video-page">
      <div className="video-container">
        <div className="video-player">
          <iframe
            title={video.title}
            width="750"
            height="400"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <CommentSection videoId={video.id} userId={video.user_id} />
      </div>
      <div className="related-videos">
        <RelatedVideos videos={relatedVideos} />
      </div>
    </div>
  </div>
  );
};

export default VideoPage;
