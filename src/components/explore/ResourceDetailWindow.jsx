import React, { useEffect, useRef, useCallback } from 'react';
import YouTubeThumbnail from './YouTubeThumbnail';

export default function ResourceDetailWindow({ resource, category, isOpen, onClose, onBack }) {
  const windowRef = useRef(null);
  const ytScrollRef = useRef(null);
  const previousActiveElement = useRef(null);
  const isDraggingYt = useRef(false);
  const dragStartX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      windowRef.current?.focus();
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onBack();
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onBack]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onBack();
    }
  };

  const handleYtWheel = useCallback((e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      ytScrollRef.current.scrollBy({
        left: e.deltaY,
        behavior: 'auto'
      });
    }
  }, []);

  const handleYtMouseDown = (e) => {
    if (e.button !== 0) return;
    isDraggingYt.current = true;
    dragStartX.current = e.clientX;
    scrollLeftStart.current = ytScrollRef.current.scrollLeft;
    ytScrollRef.current.style.cursor = 'grabbing';
    ytScrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleYtMouseMove = (e) => {
    if (!isDraggingYt.current) return;
    e.preventDefault();
    const walk = (e.clientX - dragStartX.current) * 1.5;
    ytScrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleYtMouseUp = () => {
    if (isDraggingYt.current) {
      isDraggingYt.current = false;
      ytScrollRef.current.style.cursor = 'grab';
      ytScrollRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleYtTouchStart = (e) => {
    isDraggingYt.current = true;
    dragStartX.current = e.touches[0].clientX;
    scrollLeftStart.current = ytScrollRef.current.scrollLeft;
    ytScrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleYtTouchMove = (e) => {
    if (!isDraggingYt.current) return;
    const walk = (e.touches[0].clientX - dragStartX.current) * 1.5;
    ytScrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleYtTouchEnd = () => {
    if (isDraggingYt.current) {
      isDraggingYt.current = false;
      ytScrollRef.current.style.scrollBehavior = 'smooth';
    }
  };

  if (!isOpen || !resource || !category) return null;

  const isFile = resource.type === 'file';
  const hasYoutube = resource.youtube && resource.youtube.length > 0;

  const modalStyle = {
    '--cat-accent': category.accentColor,
    '--cat-secondary': category.secondaryAccent,
    '--cat-glow': category.glowColor
  };

  const handleActionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFile) {
      const link = document.createElement('a');
      link.href = resource.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = resource.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="resource-detail-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-detail-title"
    >
      <div
        ref={windowRef}
        className="resource-detail-window"
        style={modalStyle}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resource-detail-glow" aria-hidden="true" />
        
        <header className="resource-detail-header">
          <button
            className="resource-detail-back"
            onClick={onBack}
            aria-label="Back to category"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <div className="resource-detail-title-block">
            <span className="resource-detail-type">{isFile ? 'FILE' : 'LINK'}</span>
            <h2 id="resource-detail-title" className="resource-detail-title">{resource.title}</h2>
          </div>
          <button
            className="resource-detail-close"
            onClick={onClose}
            aria-label="Close detail window"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <div className="resource-detail-divider" aria-hidden="true" />

        <div className="resource-detail-content">
          {resource.description && (
            <p className="resource-detail-desc">{resource.description}</p>
          )}

          {isFile && resource.fileType && (
            <div className="resource-detail-meta">
              <span className="resource-detail-filetype">{resource.fileType}</span>
              {resource.fileSize && <span className="resource-detail-filesize">{resource.fileSize}</span>}
            </div>
          )}

          {!isFile && (
            <div className="resource-detail-meta">
              <span className="resource-detail-domain">{new URL(resource.url).hostname.replace('www.', '')}</span>
            </div>
          )}

          <button
            className="resource-detail-action"
            onClick={handleActionClick}
            style={{ '--action-accent': category.accentColor, '--action-glow': category.glowColor }}
          >
            {isFile ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>DOWNLOAD</span>
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>OPEN WEBSITE</span>
              </>
            )}
          </button>

          {hasYoutube && (
            <section className="resource-detail-youtube" aria-labelledby="youtube-heading">
              <h3 id="youtube-heading" className="resource-detail-section-title">Related Videos</h3>
              <div
                ref={ytScrollRef}
                className="resource-detail-youtube-row"
                onWheel={handleYtWheel}
                onMouseDown={handleYtMouseDown}
                onMouseMove={handleYtMouseMove}
                onMouseUp={handleYtMouseUp}
                onMouseLeave={handleYtMouseUp}
                onTouchStart={handleYtTouchStart}
                onTouchMove={handleYtTouchMove}
                onTouchEnd={handleYtTouchEnd}
                style={{ cursor: 'grab' }}
              >
                {resource.youtube.map((video, index) => (
                  <YouTubeThumbnail
                    key={index}
                    video={video}
                    accentColor={category.accentColor}
                    glowColor={category.glowColor}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}