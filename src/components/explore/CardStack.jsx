import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

export default function CardStack({
  categories,
  onSelectCategory,
  expandingCardId,
  isTransitioning
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleCardClick = (category) => {
    if (isTransitioning) return;
    onSelectCategory(category);
  };

  return (
    <div className={`card-deck-stage ${isTransitioning ? 'is-transitioning' : ''}`}>
      <div className="deck-scene">
        {categories.map((category, index) => {
          const isHovered = hoveredId === category.id;
          const isDimmed = hoveredId !== null && !isHovered;
          const isExpanding = expandingCardId === category.id;

          return (
            /* Each card is wrapped together with its own reflection */
            <div
              key={category.id}
              className={`card-layer ${isHovered ? 'card-layer-hovered' : ''}`}
              style={{ '--layer-index': index }}
            >
              <CategoryCard
                category={category}
                index={index}
                isHovered={isHovered}
                isDimmed={isDimmed}
                isExpanding={isExpanding}
                onHover={setHoveredId}
                onLeave={() => setHoveredId(null)}
                onClick={handleCardClick}
                viewMode="deck"
              />
              {/* Reflection element — mirrors the card beneath it */}
              <div
                className={`card-reflection ${isHovered ? 'card-reflection-active' : ''}`}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
