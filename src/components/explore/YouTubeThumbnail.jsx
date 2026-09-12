import React from 'react';

export default function YouTubeThumbnail({ video, onClick, accentColor, glowColor }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick(video);
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className="youtube-thumbnail"
      onClick={handleClick}
      style={{
        '--yt-accent': accentColor,
        '--yt-glow': glowColor
      }}
      aria-label={`Watch ${video.title} on YouTube`}
    >
      <img
        src={thumbnailUrl}
        alt={`${video.title} thumbnail`}
        loading="lazy"
        aria-hidden="true"
      />
      <div className="youtube-play-overlay" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className="youtube-duration" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {video.duration || 'Video'}
      </span>
    </button>
  );
}