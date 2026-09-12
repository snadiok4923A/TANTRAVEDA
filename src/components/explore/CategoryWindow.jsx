import React, { useEffect, useRef, useCallback } from 'react';
import CompactResourceCard from './CompactResourceCard';

export default function CategoryWindow({ category, isOpen, onClose, onResourceClick }) {
  const windowRef = useRef(null);
  const fileScrollRef = useRef(null);
  const linkScrollRef = useRef(null);
  const previousActiveElement = useRef(null);
  const isDraggingFile = useRef(false);
  const isDraggingLink = useRef(false);
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

  const createWheelHandler = (scrollRef) => useCallback((e) => {
    // Convert vertical wheel delta into horizontal scroll ONLY while
    // the pointer is over this card viewport and it can actually scroll.
    if (e.deltaY !== 0) {
      const el = scrollRef.current;
      if (!el) return;
      const canScroll = el.scrollWidth > el.clientWidth;
      if (canScroll) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    }
  }, []);

  const createMouseDownHandler = (scrollRef, isDraggingRef) => (e) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartX.current = e.clientX;
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const createMouseMoveHandler = (scrollRef, isDraggingRef) => (e) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const walk = (e.clientX - dragStartX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const createMouseUpHandler = (scrollRef, isDraggingRef) => () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const createTouchStartHandler = (scrollRef, isDraggingRef) => (e) => {
    isDraggingRef.current = true;
    dragStartX.current = e.touches[0].clientX;
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const createTouchMoveHandler = (scrollRef, isDraggingRef) => (e) => {
    if (!isDraggingRef.current) return;
    const walk = (e.touches[0].clientX - dragStartX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const createTouchEndHandler = (scrollRef, isDraggingRef) => () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      scrollRef.current.style.scrollBehavior = 'smooth';
    }
  };

  if (!isOpen || !category) return null;

  const modalStyle = {
    '--cat-accent': category.accentColor,
    '--cat-secondary': category.secondaryAccent,
    '--cat-glow': category.glowColor
  };

  const files = category.resources.filter(r => r.type === 'file');
  const links = category.resources.filter(r => r.type === 'link');

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

        <div className="category-window-body">
          {links.length > 0 && (
            <section className="category-window-panel" aria-labelledby="links-panel-heading">
              <header className="category-window-panel-header">
                <span id="links-panel-heading" className="category-window-panel-title">LINKS</span>
              </header>
              <div
                ref={linkScrollRef}
                className="category-window-panel-viewport"
                onWheel={createWheelHandler(linkScrollRef)}
                onMouseDown={createMouseDownHandler(linkScrollRef, isDraggingLink)}
                onMouseMove={createMouseMoveHandler(linkScrollRef, isDraggingLink)}
                onMouseUp={createMouseUpHandler(linkScrollRef, isDraggingLink)}
                onMouseLeave={createMouseUpHandler(linkScrollRef, isDraggingLink)}
                onTouchStart={createTouchStartHandler(linkScrollRef, isDraggingLink)}
                onTouchMove={createTouchMoveHandler(linkScrollRef, isDraggingLink)}
                onTouchEnd={createTouchEndHandler(linkScrollRef, isDraggingLink)}
                style={{ cursor: 'grab' }}
              >
                <div className="category-window-panel-row">
                  {links.map((resource, index) => (
                    <CompactResourceCard
                      key={resource.id || index}
                      resource={resource}
                      onClick={onResourceClick}
                      accentColor={category.accentColor}
                      glowColor={category.glowColor}
                      variant="link"
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {files.length > 0 && (
            <section className="category-window-panel" aria-labelledby="files-panel-heading">
              <header className="category-window-panel-header">
                <span id="files-panel-heading" className="category-window-panel-title">FILES</span>
              </header>
              <div
                ref={fileScrollRef}
                className="category-window-panel-viewport"
                onWheel={createWheelHandler(fileScrollRef)}
                onMouseDown={createMouseDownHandler(fileScrollRef, isDraggingFile)}
                onMouseMove={createMouseMoveHandler(fileScrollRef, isDraggingFile)}
                onMouseUp={createMouseUpHandler(fileScrollRef, isDraggingFile)}
                onMouseLeave={createMouseUpHandler(fileScrollRef, isDraggingFile)}
                onTouchStart={createTouchStartHandler(fileScrollRef, isDraggingFile)}
                onTouchMove={createTouchMoveHandler(fileScrollRef, isDraggingFile)}
                onTouchEnd={createTouchEndHandler(fileScrollRef, isDraggingFile)}
                style={{ cursor: 'grab' }}
              >
                <div className="category-window-panel-row">
                  {files.map((resource, index) => (
                    <CompactResourceCard
                      key={resource.id || index}
                      resource={resource}
                      onClick={onResourceClick}
                      accentColor={category.accentColor}
                      glowColor={category.glowColor}
                      variant="file"
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {files.length === 0 && links.length === 0 && (
            <div className="category-window-empty">
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