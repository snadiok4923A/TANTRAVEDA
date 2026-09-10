import { useEffect, useRef } from 'react';

// Global registry for scroll-based dynamic letter spacing
const registry = new Set();
let rafId = 0;
let installed = false;

function installGlobalLoop() {
  if (installed) return;
  installed = true;
  const tick = () => {
    rafId = 0;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    for (const entry of registry) {
      if (!entry.el || !entry.el.isConnected) continue;
      entry.update(vh);
    }
    rafId = requestAnimationFrame(tick);
  };
  rafId = requestAnimationFrame(tick);
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

// Smoothstep for premium easing
function smoothstep(value) {
  const x = clamp(value, 0, 1);
  return x * x * (3 - 2 * x);
}

function lockLineBreaks(el) {
  if (el.dataset.linesLocked === 'true') return;
  el.dataset.linesLocked = 'true';

  // If the element already contains explicit <br> tags, just lock wrapping
  if (el.querySelector('br')) {
    el.style.whiteSpace = 'nowrap';
    return;
  }

  // Otherwise, calculate natural line breaks and lock them in
  const text = el.innerText;
  if (!text || text.trim() === '') return;
  
  const words = text.split(' ');
  el.innerHTML = '';
  const spans = [];
  
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.textContent = word + (i < words.length - 1 ? ' ' : '');
    el.appendChild(span);
    spans.push(span);
  });
  
  let currentTop = -1;
  const lines = [];
  let currentLine = [];
  
  spans.forEach(span => {
    if (currentTop === -1) {
      currentTop = span.offsetTop;
      currentLine.push(span);
    } else if (span.offsetTop > currentTop + 5) { // New line detected
      lines.push(currentLine);
      currentLine = [span];
      currentTop = span.offsetTop;
    } else {
      currentLine.push(span);
    }
  });
  lines.push(currentLine);
  
  el.innerHTML = '';
  lines.forEach((line, i) => {
    const lineWrapper = document.createElement('span');
    lineWrapper.style.whiteSpace = 'nowrap';
    line.forEach(span => lineWrapper.appendChild(span));
    el.appendChild(lineWrapper);
    if (i < lines.length - 1) {
      el.appendChild(document.createElement('br'));
    }
  });
}

export default function useScrollAnimation(options = {}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let entry = null;

    // Only apply the scroll-based text effect to big texts or headlines
    if (['H1', 'H2', 'H3'].includes(el.tagName)) {
      // Lock the natural line breaks BEFORE applying any spacing changes
      lockLineBreaks(el);
      
      installGlobalLoop();

      const gapLarge = options.letterSpacingEnd !== undefined ? options.letterSpacingEnd : 0.15;
      const gapSmall = options.letterSpacingStart !== undefined ? options.letterSpacingStart : -0.02;

      const update = (vh) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        
        // Map vertical position: 0 at top of viewport, 1 at bottom of viewport
        const normalized = center / vh;
        
        const progress = smoothstep(normalized);
        
        // At bottom of screen (scrolled up): gap is large
        // At top of screen (scrolled down): gap is small
        const currentGap = gapSmall + (gapLarge - gapSmall) * progress;
        
        el.style.letterSpacing = `${currentGap.toFixed(4)}em`;
      };

      entry = { el, update };
      registry.add(entry);
      
      update(window.innerHeight || document.documentElement.clientHeight);
    }

    return () => {
      if (entry) registry.delete(entry);
    };
  }, [options.letterSpacingStart, options.letterSpacingEnd]);

  return { ref: (node) => { elRef.current = node; } };
}
