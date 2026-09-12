import React, { useEffect, useRef } from 'react';
import FileCard from './FileCard';
import LinkCard from './LinkCard';
import YouTubeCard from './YouTubeCard';

export default function CategoryModal({ category, isOpen, onClose }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
        if (e.key === 'Tab') {
          trapFocus(e);
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  const trapFocus = (e) => {
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements?.length) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !category) return null;

  const hasFiles = category.files && category.files.length > 0;
  const hasLinks = category.links && category.links.length > 0;
  const hasYouTube = category.youtube && category.youtube.length > 0;

  const modalStyle = {
    '--cat-accent': category.accentColor,
    '--cat-secondary': category.secondaryAccent,
    '--cat-glow': category.glowColor
  };

  return (
    <div
      className="category-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="category-modal"
        style={modalStyle}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-glow" aria-hidden="true" />
        
        <header className="modal-header">
          <div className="modal-header-left">
            <span className="modal-category-number">// {category.number}</span>
            <h2 id="modal-title" className="modal-category-title">{category.title}</h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <div className="modal-divider" aria-hidden="true" />

        <p className="modal-category-desc">{category.description}</p>

        <div className="modal-content">
          {hasFiles && (
            <section className="modal-section" aria-labelledby="files-heading">
              <h3 id="files-heading" className="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>Files</span>
                <span className="modal-section-count">{category.files.length}</span>
              </h3>
              <div className="modal-resource-grid">
                {category.files.map((file, index) => (
                  <FileCard key={index} file={file} />
                ))}
              </div>
            </section>
          )}

          {hasLinks && (
            <section className="modal-section" aria-labelledby="links-heading">
              <h3 id="links-heading" className="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>Links</span>
                <span className="modal-section-count">{category.links.length}</span>
              </h3>
              <div className="modal-resource-grid">
                {category.links.map((link, index) => (
                  <LinkCard key={index} link={link} />
                ))}
              </div>
            </section>
          )}

          {hasYouTube && (
            <section className="modal-section" aria-labelledby="youtube-heading">
              <h3 id="youtube-heading" className="modal-section-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  <path d="M9.545 13.176l5.727-3.524-5.727-3.511v7.035z" />
                </svg>
                <span>YouTube</span>
                <span className="modal-section-count">{category.youtube.length}</span>
              </h3>
              <div className="modal-resource-grid">
                {category.youtube.map((video, index) => (
                  <YouTubeCard key={index} video={video} />
                ))}
              </div>
            </section>
          )}

          {!hasFiles && !hasLinks && !hasYouTube && (
            <div className="modal-empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p>No resources available for this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}