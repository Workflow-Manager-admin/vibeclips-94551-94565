import React from 'react';
import './App.css';
import VibeClipsContainer from './components/VideoContainer/VibeClipsContainer';
import mockVideos from './data/mockVideos';

/**
 * App Component
 * 
 * Main application entry point that renders the VibeClipsContainer
 */
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <span className="logo-symbol">✨</span> VibeClips
        </div>
      </header>

      <main className="app-main">
        <VibeClipsContainer videos={mockVideos} />
      </main>
    </div>
  );
}

export default App;