import React from 'react';
import { timelineData } from '../../data/timelineData';
import TimelineCard from './TimelineCard';

const TimelineSection = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-12">
      {/* Center Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-accentGold/30 to-transparent" />
      
      <div className="flex flex-col gap-12 md:gap-24">
        {timelineData.map((item, index) => (
          <TimelineCard 
            key={item.id} 
            item={item} 
            index={index} 
            isLeft={index % 2 === 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
