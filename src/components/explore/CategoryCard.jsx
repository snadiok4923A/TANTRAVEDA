import React from 'react';

const CLOUDINARY_URL =
  'https://res.cloudinary.com/eev7ddsv/video/upload/v1789069854/0910.mp4';

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

  // All categories currently use the same Cloudinary video.
  // Replace individual URLs here later when the remaining videos are uploaded.
  const videoSrc = CLOUDINARY_URL;

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
            preload="metadata"
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

      {/* ── TOP BLOCK: index row + title ── */}
      <div className="card-top-block">
        {/* Meta row: number only */}
        <div className="card-top-row">
          <span className="card-index">{category.number}</span>
        </div>

        {/* Title */}
        <h3 className="card-title">{category.title}</h3>
      </div>

      {/* ── SPACER ── */}
      <div className="card-spacer" aria-hidden="true" />

      {/* ── FOOTER ── */}
      <div className="card-footer">
        <div className="card-action-btn">
          <span>Enter</span>
          <span className="card-action-arrow">→</span>
        </div>
      </div>
    </div>
  );
}