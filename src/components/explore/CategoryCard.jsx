import React from 'react';

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
      {/* Corner Cybernetic Brackets */}
      <span className="corner-bracket corner-tl" aria-hidden="true" />
      <span className="corner-bracket corner-tr" aria-hidden="true" />
      <span className="corner-bracket corner-bl" aria-hidden="true" />
      <span className="corner-bracket corner-br" aria-hidden="true" />

      {/* Ambient Top Light Beam */}
      <div className="card-ambient-light" aria-hidden="true" />

      {/* Card Header Info */}
      <div className="card-top-row">
        <span className="card-index">// {category.number}</span>
        <span className="card-status-pill">FREE ACCESS</span>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <h3 className="card-title">{category.title}</h3>
        <p className="card-tagline">{category.tagline}</p>
        <p className="card-description">{category.description}</p>

        {/* Tags */}
        <div className="card-tags">
          {category.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        <div className="card-stats-preview">
          <div className="card-stat-item">
            <span className="card-stat-value">{category.stats.items}</span>
            <span className="card-stat-label">Available</span>
          </div>
          <div className="card-stat-item">
            <span className="card-stat-value">{category.stats.access}</span>
            <span className="card-stat-label">License</span>
          </div>
        </div>

        <div className="card-action-btn">
          <span>Enter</span>
          <span className="card-action-arrow">→</span>
        </div>
      </div>
    </div>
  );
}
