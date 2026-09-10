import React from 'react';
import softwareVideo from '/videos/software.mp4';
import educationVideo from '/videos/education.mp4';
import moviesVideo from '/videos/movies.mp4';
import imagesVideo from '/videos/images.mp4';
import videosVideo from '/videos/videos.mp4';
import sfxVideo from '/videos/sfx.mp4';

export default function CategoryCard({
  category,
  index,
  isHovered,
  isDimmed,
  isExpanding,
  onHover,
  onLeave,
  onClick,
  viewMode = 'deck'
}) {
  const cardStyle = {
    '--card-accent': category.accentColor,
    '--card-secondary': category.secondaryAccent,
    '--card-glow': category.glowColor,
    '--card-gradient': category.gradient
  };

  // Map category IDs to video imports
  const videoMap = {
    software: softwareVideo,
    education: educationVideo,
    movies: moviesVideo,
    images: imagesVideo,
    videos: videosVideo,
    sfx: sfxVideo
  };

  const videoSrc = videoMap[category.id];

  const handleClick = (e) => {
    e.preventDefault();
    onClick(category);
  };

  return (
    <div
      className={`category-card ${isHovered ? 'is-hovered' : ''} ${
        isDimmed ? 'sibling-dimmed' : ''
      } ${isExpanding ? 'expanding' : ''}`}
      style={cardStyle}
      onMouseEnter={() => onHover(category.id)}
      onMouseLeave={onLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Explore ${category.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(category);
        }
      }}
    >
      {/* ── BACKGROUND VIDEO ── */}
      {videoSrc && (
        <>
          <video
            className="card-video-bg"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="card-video-overlay" aria-hidden="true" />
        </>
      )}

      {/* Corner Cybernetic Brackets */}
      <span className="corner-bracket corner-tl" aria-hidden="true" />
      <span className="corner-bracket corner-tr" aria-hidden="true" />
      <span className="corner-bracket corner-bl" aria-hidden="true" />
      <span className="corner-bracket corner-br" aria-hidden="true" />

      {/* Ambient Top Light Beam */}
      <div className="card-ambient-light" aria-hidden="true" />

      {/* ── TOP BLOCK: index row + title, all anchored to top ── */}
      <div className="card-top-block">
        {/* Meta row: number only */}
        <div className="card-top-row">
          <span className="card-index">{category.number}</span>
        </div>

        {/* Title */}
        <h3 className="card-title">{category.title}</h3>
      </div>

      {/* ── SPACER: grows to push footer to bottom ── */}
      <div className="card-spacer" aria-hidden="true" />

      {/* ── FOOTER: Enter action anchored to bottom ── */}
      <div className="card-footer">
        <div className="card-action-btn">
          <span>Enter</span>
          <span className="card-action-arrow">→</span>
        </div>
      </div>
    </div>
  );
}
