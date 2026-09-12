import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

export default function CardStack({
  categories,
  onSelectCategory
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleCardClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="card-deck-stage">
      <div className="deck-scene">
        {categories.map((category, index) => {
          const isHovered = hoveredId === category.id;
          const isDimmed = hoveredId !== null && !isHovered;

          return (
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
                onHover={setHoveredId}
                onLeave={() => setHoveredId(null)}
                onClick={handleCardClick}
                viewMode="deck"
              />
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