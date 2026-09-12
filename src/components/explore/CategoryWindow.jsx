import React, { useEffect, useRef, useCallback } from 'react';
import ResourceCard from './ResourceCard';

export default function CategoryWindow({ category, isOpen, onClose, onResourceClick }) {
  const windowRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const previousActiveElement = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      windowRef.current?.focus();
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleWheel = useCallback((e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      scrollContainerRef.current.scrollBy({
        left: e.deltaY,
        behavior: 'auto'
      });
    }
  }, []);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (e.clientX - dragStartX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.scrollBehavior = 'auto';
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const walk = (e.touches[0].clientX - dragStartX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleTouchEnd = () => {
    if (isDragging.current) {
      isDragging.current = false;
      scrollContainerRef.current.style.scrollBehavior = 'smooth';
    }
  };

  if (!isOpen || !category) return null;

  const modalStyle = {
    '--cat-accent': category.accentColor,
    '--cat-secondary': category.secondaryAccent,
    '--cat-glow': category.glowColor
  };

  return (
    <div
      className="category-window-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-window-title"
    >
      <div
        ref={windowRef}
        className="category-window"
        style={modalStyle}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="category-window-glow" aria-hidden="true" />
        
        <header className="category-window-header">
          <div className="category-window-title-block">
            <span className="category-window-number">// {category.number}</span>
            <h2 id="category-window-title" className="category-window-title">{category.title}</h2>
          </div>
          <button
            className="category-window-close"
            onClick={onClose}
            aria-label="Close category window"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <div className="category-window-divider" aria-hidden="true" />

        <div
          ref={scrollContainerRef}
          className="category-window-resources"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: 'grab' }}
        >
          {category.resources.map((resource, index) => (
            <ResourceCard
              key={resource.id || index}
              resource={resource}
              onClick={onResourceClick}
              accentColor={category.accentColor}
              glowColor={category.glowColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}