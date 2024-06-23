// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import VideoList from '../components/VideoList';
// import UploadButton from '../components/UploadButton';
// import '../styles/HomePage.css';
// import logo from '../assets/FULL_LOGO_DARK.png'; 

// const HomePage = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get('https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=Subhash');
//         setVideos(response.data.videos);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div className="home-page">
//       <header className="header">
//           <img src={logo} alt="Learnwell Logo" className="logo" />
//         <UploadButton />
//       </header>
//       <div className="content">
//         <VideoList videos={videos} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VideoList from '../components/VideoList';
import UploadButton from '../components/UploadButton';
import '../styles/HomePage.css';
import logo from '../assets/FULL_LOGO_DARK.png'; 

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    fetchVideos();
  }, []);

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

