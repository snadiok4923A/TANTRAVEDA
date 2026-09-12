import React from 'react';

export default function CompactResourceCard({ resource, onClick, accentColor, glowColor, variant }) {
  const isFile = variant === 'file';

  return (
    <button
      className="compact-resource-card"
      onClick={() => onClick(resource)}
      style={{
        '--resource-accent': accentColor,
        '--resource-glow': glowColor
      }}
      aria-label={`View ${resource.title} details`}
    >
      <div className="compact-resource-body">
        <h4 className="compact-resource-title">{resource.title}</h4>
        {resource.description && (
          <p className="compact-resource-desc">{resource.description}</p>
        )}
      </div>
      <div className="compact-resource-action">
        {isFile ? (
          <button
            className="compact-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              const link = document.createElement('a');
              link.href = resource.url;
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.download = resource.title;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            aria-label={`Download ${resource.title}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        ) : (
          <button
            className="compact-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              window.open(resource.url, '_blank', 'noopener,noreferrer');
            }}
            aria-label={`Open ${resource.title}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
        )}
      </div>
    </button>
  );
}