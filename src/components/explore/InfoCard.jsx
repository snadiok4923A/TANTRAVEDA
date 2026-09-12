import React from 'react';
import ResourceCard from './ResourceCard';

export default function InfoCard({ resource }) {
  return (
    <ResourceCard
      type="INFORMATION"
      visual={<span className="resource-info-icon">i</span>}
      title={resource.title}
      description={resource.description}
      action={
        <div className="resource-info-content">
          <span>Read</span>
        </div>
      }
    />
  );
}
