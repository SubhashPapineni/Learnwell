import React from 'react';
import { Link } from 'react-router-dom';

const UploadButton = () => {
  return (
    <div className="upload-btn">
      <Link to="/upload">
        <button>Upload</button>
      </Link>
    </div>
  );
};

export default UploadButton;
