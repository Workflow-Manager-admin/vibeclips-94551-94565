import React from 'react';
import './VideoItem.css';

/**
 * PUBLIC_INTERFACE
 * VideoItem Component
 * 
 * Displays a single video in the feed with user information and interaction controls
 * 
 * @param {Object} props
 * @param {Object} props.video - Video data object
 * @param {boolean} props.isActive - Whether this video is currently active/visible
 */
const VideoItem = ({ video, isActive }) => {
  // In a real implementation, we would handle actual video playback here
  // based on whether the video is active/visible in the viewport
  
  if (!video) return null;
  
  return (
    <div className={`video-item ${isActive ? 'active' : ''}`}>
      <div className="video-container">
        {/* Video would be replaced with actual video element in future implementations */}
        <div className="video-placeholder">
          <img 
            src={video.thumbnailUrl} 
            alt={`Video by ${video.user.username}`}
            className="video-thumbnail"
          />
          {/* Play button overlay */}
          <div className="play-overlay">
            <div className="play-button">▶</div>
          </div>
        </div>
      </div>
      
      <div className="video-info">
        {/* User info section */}
        <div className="user-info">
          <div className="avatar">
            <img src={video.user.avatarUrl} alt={video.user.username} />
          </div>
          <div className="username">{video.user.username}</div>
        </div>
        
        {/* Video description */}
        <div className="video-description">{video.description}</div>
      </div>
      
      {/* Interaction controls */}
      <div className="interaction-controls">
        <div className="control-item">
          <div className="control-icon">❤️</div>
          <div className="control-count">{video.stats.likes}</div>
        </div>
        <div className="control-item">
          <div className="control-icon">💬</div>
          <div className="control-count">{video.stats.comments}</div>
        </div>
        <div className="control-item">
          <div className="control-icon">↗️</div>
          <div className="control-count">{video.stats.shares}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
