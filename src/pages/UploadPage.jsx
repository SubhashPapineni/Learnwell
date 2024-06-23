import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UploadPage.css';
import { FaVideo, FaLink, FaFileAlt} from 'react-icons/fa'; 

/**
 * UploadPage component
 * This component provides a form for users to upload a video by entering a title, description, and video URL.
 */

const UploadPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
  });

  /**
   * handleSubmit - Function to handle form submission
   * @param {object} e - The form submission event
   */

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      user_id: 'Subhash', // Example user_id, replace with actual dynamic user id as needed
      description: formData.description,
      video_url: formData.videoUrl,
      title: formData.title,
    };

    try {
      const response = await axios.post('https://take-home-assessment-423502.uc.r.appspot.com/api/videos', payload);
      console.log('Upload response:', response.data);
      alert('Video uploaded successfully!');
      // Reset form data upon successful upload
      setFormData({
        title: '',
        description: '',
        videoUrl: '',
      });
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Failed to upload video. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      videoUrl: '',
    });
  };

  return (
    <div className="upload-page">
      <h1>Upload a video</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <FaVideo className="icon" />
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title your video"
            required
          />
        </div>
        <div>
        <FaFileAlt className="icon" />
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your Video"
            required
          ></textarea>
        </div>
        <div>
        <FaLink className="icon" />
          <input
            type="url"
            name="videoUrl"
            placeholder="https://www.your-video-link.com" 
            value={formData.videoUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="upload">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
