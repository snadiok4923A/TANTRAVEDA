import React from 'react';
import { useRouter } from '../router/Router';

function Navigation() {
  const { currentPath, navigate } = useRouter();
  const isHomePage = currentPath === '/';

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleNavClick = (e, targetHash) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    // If already on home page, normal browser anchor link works naturally
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    navigate('/start');
  };

  return (
    <nav>
      <div
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
      >
        T A N T R A V E D A
      </div>

      <div className="nav-links">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
          Product
        </a>
        <a href="#convergence" onClick={(e) => handleNavClick(e, '#convergence')}>
          Experiments
        </a>
        <a href="#distortion" onClick={(e) => handleNavClick(e, '#distortion')}>
          System
        </a>
        <a href="#final" onClick={(e) => handleNavClick(e, '#final')}>
          About
        </a>
      </div>

      <a
        href="#start"
        className={`cta-button ${currentPath.startsWith('/start') ? 'active' : ''}`}
        onClick={handleGetStartedClick}
      >
        Get Started
      </a>
    </nav>
  );
}

export default Navigation;
