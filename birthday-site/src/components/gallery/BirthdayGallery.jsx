import React from 'react';
import { memoriesData } from '../../data/memoriesData';
import PolaroidCard from './PolaroidCard';

const BirthdayGallery = () => {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {memoriesData.map((memory, index) => (
          <PolaroidCard 
            key={memory.id} 
            memory={memory} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayGallery;
