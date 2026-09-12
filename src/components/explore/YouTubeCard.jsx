import React from 'react';

export default function YouTubeCard({ video }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="resource-card youtube-card" onClick={handleClick}>
      <div className="resource-card-thumbnail">
        <img
          src={thumbnailUrl}
          alt={`${video.title} thumbnail`}
          loading="lazy"
          aria-hidden="true"
        />
        <div className="youtube-play-overlay" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="resource-card-content">
        <h4 className="resource-card-title">{video.title}</h4>
        <p className="resource-card-desc">{video.description}</p>
        <div className="resource-card-meta">
          <span className="resource-type">YouTube</span>
        </div>
      </div>
      <button className="resource-card-action" onClick={handleClick} aria-label={`Watch ${video.title} on YouTube`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        <span>Watch on YouTube</span>
      </button>
    </div>
  );
}