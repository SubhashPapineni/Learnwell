import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/CommentSection.css';

const CommentSection = ({ videoId,userId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments', {
        video_id : videoId,
        user_id: userId,
        content: newComment
      });
      fetchComments()
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  
  const fetchComments = async () => {
    try {
      const response = await axios.get(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=${videoId}`);
      setComments(response.data.comments);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  console.log(comments)
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          required
        ></input>
        <button type="submit">Comment</button>
      </form>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <p>{comment.content}</p>
            <p className="comment-user">Posted by: {comment.user_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
