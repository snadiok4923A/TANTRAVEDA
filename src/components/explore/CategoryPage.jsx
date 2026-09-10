import React from 'react';
import { useNavigate, Link } from '../../router/Router';
import { getCategoryById, categories } from '../../data/categories';
import './explore.css';

export default function CategoryPage({ categoryId }) {
  const navigate = useNavigate();
  const category = getCategoryById(categoryId) || categories[0];

  const pageThemeStyle = {
    '--cat-accent': category.accentColor,
    '--cat-secondary': category.secondaryAccent,
    '--cat-glow': category.glowColor
  };

  return (
    <div className="category-page-wrapper" style={pageThemeStyle}>
      <div className="explore-backdrop" aria-hidden="true" />

      {/* Navigation & Breadcrumbs */}
      <div className="category-nav-bar">
        <button
          type="button"
          className="back-to-explore-btn"
          onClick={() => navigate('/start')}
        >
          <span>←</span>
          <span>Back to Explore</span>
        </button>

        <div className="category-breadcrumbs">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/start" style={{ color: 'inherit', textDecoration: 'none' }}>
            Explore
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">{category.title}</span>
        </div>
      </div>

      {/* Category Hero Banner */}
      <section className="category-hero">
        <div className="category-hero-ambient" aria-hidden="true" />

        <div className="category-hero-header">
          <span className="category-num-badge">// {category.number}</span>
          <span className="card-status-pill">{category.stats.access}</span>
        </div>

        <h1 className="category-hero-title">{category.title}</h1>
        <p className="category-hero-tagline">{category.tagline}</p>
        <p className="category-hero-desc">{category.description}</p>

        {/* Quick Metrics Bar */}
        <div className="category-metrics-bar">
          <div className="category-metric-box">
            <span className="metric-number">{category.stats.items}</span>
            <span className="metric-name">Curated Repository</span>
          </div>
          <div className="category-metric-box">
            <span className="metric-number">{category.stats.updated}</span>
            <span className="metric-name">Release Frequency</span>
          </div>
          <div className="category-metric-box">
            <span className="metric-number">{category.stats.access}</span>
            <span className="metric-name">License Type</span>
          </div>
        </div>
      </section>

      {/* Clean Content Area */}
      <section className="category-content-section">
        <div className="content-section-title-bar">
          <h2 className="content-section-title">CURATED RELEASES</h2>
          <span className="content-status-indicator">● LIVE INDEX ACTIVE</span>
        </div>

        <div className="category-resource-grid">
          {category.previewItems.map((item, index) => (
            <div key={index} className="resource-module-card">
              <div className="resource-module-top">
                <span className="resource-module-version">{item.version}</span>
                <span className="module-access-badge">UNRESTRICTED</span>
              </div>
              <h3 className="resource-module-title">{item.name}</h3>
              <p className="resource-module-desc">{item.desc}</p>
              <div className="resource-module-action">
                <span className="card-stat-label">Available Direct</span>
                <span className="module-action-link">Access Asset →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
