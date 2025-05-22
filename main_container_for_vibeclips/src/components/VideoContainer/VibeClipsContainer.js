import React, { useState, useEffect, useRef } from 'react';
import VideoItem from './VideoItem';
import './VibeClipsContainer.css';

/**
 * PUBLIC_INTERFACE
 * VibeClipsContainer Component
 * 
 * Main container for the VibeClips application that handles the vertical video feed
 * 
 * @param {Object} props
 * @param {Array} props.videos - Array of video data objects
 */
const VibeClipsContainer = ({ videos }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Detect which video is currently in view to set it as active
  // In a production app, we would use Intersection Observer here
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const scrollTop = containerRef.current.scrollTop;
    const containerHeight = containerRef.current.clientHeight;
    const currentIndex = Math.round(scrollTop / containerHeight);
    
    if (currentIndex !== activeVideoIndex) {
      setActiveVideoIndex(currentIndex);
    }
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      
      // Cleanup scroll listener on unmount
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeVideoIndex]);
  
  // If no videos are provided, show a loading state
  if (!videos || videos.length === 0) {
    return (
      <div className="vibe-clips-container empty">
        <div className="loading-message">
          <div className="loading-icon">📱</div>
          <div className="loading-text">Loading amazing videos...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="vibe-clips-container" ref={containerRef}>
      {videos.map((video, index) => (
        <div className="video-wrapper" key={video.id}>
          <VideoItem 
            video={video} 
            isActive={index === activeVideoIndex}
          />
        </div>
      ))}
      
      <div className="app-navigation">
        <div className="nav-item active">
          <div className="nav-icon">🏠</div>
          <div className="nav-text">Home</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon">🔍</div>
          <div className="nav-text">Discover</div>
        </div>
        <div className="nav-item nav-item-create">
          <div className="create-button">+</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon">💬</div>
          <div className="nav-text">Inbox</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon">👤</div>
          <div className="nav-text">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default VibeClipsContainer;
