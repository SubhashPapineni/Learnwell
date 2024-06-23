import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VideoList from '../components/VideoList';
import UploadButton from '../components/UploadButton';
import '../styles/HomePage.css';
import logo from '../assets/FULL_LOGO_DARK.png'; 

/**
 * HomePage component
 * This component is the main landing page of the application.
 * It fetches and displays a list of videos and includes a search functionality.
 */

const HomePage = () => {
  // State to hold the list of videos
  const [videos, setVideos] = useState([]);
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * fetchVideos - Function to fetch videos based on a query
   * @param {string} query - The search query to filter videos
   */

  const fetchVideos = async (query = '') => {
    try {
      const response = await axios.get('https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=Subhash', {
        params: { q: query },
      });
      setVideos(response.data.videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  // useEffect hook to fetch videos when the component mounts
  useEffect(() => {
    fetchVideos();
  }, []);

  /**
   * handleSearch - Function to handle the search form submission
   * @param {object} event - The form submission event
   */

  const handleSearch = (event) => {
    event.preventDefault();
    fetchVideos(searchQuery);
  };

  return (
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
      <div className="content">
        <VideoList videos={videos} />
      </div>
    </div>
  );
};

export default HomePage;
