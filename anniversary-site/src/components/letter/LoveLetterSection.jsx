import React from 'react';

const LoveLetterSection = () => {
  return (
    <div className="max-w-2xl mx-auto bg-[#FAFAFA] text-stone-800 p-8 md:p-12 lg:p-16 rounded-sm shadow-2xl relative">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />
      
      {/* Letter Content */}
      <div className="relative z-10 font-serif leading-loose text-lg md:text-xl space-y-6">
        <p className="font-script text-3xl md:text-4xl text-accentRose mb-8">My Dearest,</p>
        
        <p>
          As I sit here writing this, I am overwhelmed by the memories we've shared and the beautiful life we are building together. Finding you was like finding a part of myself I didn't know was missing.
        </p>
        
        <p>
          You are my greatest adventure, my quietest comfort, and my absolute best friend. Every day with you teaches me something new about love, patience, and joy. Even in the mundane moments—like doing groceries or cooking dinner—I find myself pausing just to be grateful that you are there beside me.
        </p>
        
        <p>
          Thank you for loving me exactly as I am, for supporting my dreams, and for making every single day brighter just by existing. I cannot wait to see what the future holds for us, but I know that as long as we are together, it will be wonderful.
        </p>
        
        <p className="pt-8">
          Forever yours,<br/>
          <span className="font-script text-3xl md:text-4xl text-accentRose inline-block mt-4 italic">Your Love</span>
        </p>
      </div>
    </div>
  );
};

export default LoveLetterSection;
