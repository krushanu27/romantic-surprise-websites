import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoMessage = () => {
  return (
    <div className="glass-card p-4 md:p-8 w-full">
      <h3 className="font-display text-2xl text-bdayDark mb-6 text-left border-b border-bdayDark/10 pb-4">
        A Special Message
      </h3>
      <div className="aspect-video bg-bdayDark rounded-xl overflow-hidden relative group cursor-pointer flex items-center justify-center">
        {/* Placeholder for actual video element */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-bdayPurple to-bdayRose" />
        
        <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all z-10" />
        
        <p className="absolute bottom-4 left-4 text-white/70 font-sans text-sm z-10">
          Click to play video
        </p>
      </div>
    </div>
  );
};

export default VideoMessage;
