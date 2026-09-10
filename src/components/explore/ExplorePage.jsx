import React, { useState } from 'react';
import { useNavigate } from '../../router/Router';
import { categories } from '../../data/categories';
import CardStack from './CardStack';
import './explore.css';

export default function ExplorePage() {
  const navigate = useNavigate();
  const [expandingCardId, setExpandingCardId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectCategory = (category) => {
    if (isTransitioning) return;
    setExpandingCardId(category.id);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(category.route);
    }, 600);
  };

  return (
    <div className="explore-container">
      <div className="explore-backdrop" aria-hidden="true" />
      <CardStack
        categories={categories}
        onSelectCategory={handleSelectCategory}
        expandingCardId={expandingCardId}
        isTransitioning={isTransitioning}
      />
    </div>
  );
}
