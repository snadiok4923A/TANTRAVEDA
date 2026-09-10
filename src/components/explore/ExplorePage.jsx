import React, { useState } from 'react';
import { useNavigate } from '../../router/Router';
import { categories } from '../../data/categories';
import CardStack from './CardStack';
import './explore.css';

export default function ExplorePage() {
  const navigate = useNavigate();
  const [expandingCardId, setExpandingCardId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectCategory = (category) => {
    if (isTransitioning) return;
    setExpandingCardId(category.id);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(category.route);
    }, 600);
  };

  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="explore-container">
      <div className="explore-backdrop" aria-hidden="true" />
      <div className="search-wrapper">
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input 
          className="search-input" 
          type="text" 
          placeholder="Search categories..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search categories"
        />
      </div>
      <CardStack
        categories={filteredCategories}
        onSelectCategory={handleSelectCategory}
        expandingCardId={expandingCardId}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}
