import React from 'react';

export default function LinkCard({ link }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  const getDomain = (url) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  return (
    <div className="resource-card link-card">
      <div className="resource-card-icon link-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>
      <div className="resource-card-content">
        <h4 className="resource-card-title">{link.title}</h4>
        <p className="resource-card-desc">{link.description}</p>
        <div className="resource-card-meta">
          <span className="resource-domain">{getDomain(link.url)}</span>
        </div>
      </div>
      <button className="resource-card-action" onClick={handleClick} aria-label={`Open ${link.title}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        <span>Go to Link</span>
      </button>
    </div>
  );
}