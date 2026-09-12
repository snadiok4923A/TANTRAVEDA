import React, { useState, useCallback } from 'react';
import { categories } from '../../data/categories';
import CardStack from './CardStack';
import CategoryWindow from './CategoryWindow';
import ResourceDetailWindow from './ResourceDetailWindow';
import './explore.css';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryWindowOpen, setIsCategoryWindowOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isDetailWindowOpen, setIsDetailWindowOpen] = useState(false);

  const handleSelectCategory = useCallback((category) => {
    setSelectedCategory(category);
    setIsCategoryWindowOpen(true);
  }, []);

  const handleCloseCategoryWindow = useCallback(() => {
    setIsCategoryWindowOpen(false);
    setSelectedCategory(null);
    setSelectedResource(null);
    setIsDetailWindowOpen(false);
  }, []);

  const handleSelectResource = useCallback((resource) => {
    setSelectedResource(resource);
    setIsDetailWindowOpen(true);
  }, []);

  const handleCloseDetailWindow = useCallback(() => {
    setIsDetailWindowOpen(false);
    setSelectedResource(null);
  }, []);

  const handleBackFromDetail = useCallback(() => {
    setIsDetailWindowOpen(false);
    setSelectedResource(null);
  }, []);

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
      />
      {selectedCategory && (
        <CategoryWindow
          category={selectedCategory}
          isOpen={isCategoryWindowOpen}
          onClose={handleCloseCategoryWindow}
          onResourceClick={handleSelectResource}
        />
      )}
      {selectedResource && selectedCategory && (
        <ResourceDetailWindow
          resource={selectedResource}
          category={selectedCategory}
          isOpen={isDetailWindowOpen}
          onClose={handleCloseDetailWindow}
          onBack={handleBackFromDetail}
        />
      )}
    </div>
  );
}