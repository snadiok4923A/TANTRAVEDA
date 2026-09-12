import React from 'react';

export default function ResourceCard({ resource, onClick, accentColor, glowColor }) {
  const isFile = resource.type === 'file';

  return (
    <button
      className="resource-card"
      onClick={() => onClick(resource)}
      style={{
        '--resource-accent': accentColor,
        '--resource-glow': glowColor
      }}
      aria-label={`View ${resource.title} details`}
    >
      <div className={`resource-card-icon ${isFile ? 'file-icon' : 'link-icon'}`} aria-hidden="true">
        {isFile ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        )}
      </div>
      <div className="resource-card-info">
        <h4 className="resource-card-title">{resource.title}</h4>
        {resource.description && (
          <p className="resource-card-desc">{resource.description}</p>
        )}
        {isFile && resource.fileType && (
          <span className="resource-card-type">
            {resource.fileType} · {resource.fileSize}
          </span>
        )}
        {!isFile && (
          <span className="resource-card-type">
            {new URL(resource.url).hostname.replace('www.', '')}
          </span>
        )}
      </div>
      <div className="resource-card-action" aria-hidden="true">
        {isFile ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </div>
    </button>
  );
}