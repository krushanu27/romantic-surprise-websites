import React from 'react';
import { reasonsData } from '../../data/reasonsData';
import ReasonCard from './ReasonCard';

const ReasonsGrid = () => {
  return (
    <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-20">
      {reasonsData.map((reason, index) => (
        <ReasonCard 
          key={index} 
          index={index} 
          reason={reason} 
        />
      ))}
    </div>
  );
};

export default ReasonsGrid;
