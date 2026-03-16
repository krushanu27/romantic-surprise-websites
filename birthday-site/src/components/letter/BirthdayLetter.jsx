import React from 'react';
import { motion } from 'framer-motion';
import TypewriterMessage from './TypewriterMessage';

const BirthdayLetter = () => {
  const fullText = `Happy Birthday to the most amazing person I know!

Another year older, another year of incredible memories we've made together. I am so incredibly proud of everything you've accomplished and the beautiful person you continue to become.

I hope this little website brings a huge smile to your face today. You deserve to be celebrated not just today, but every single day. Thank you for being my rock, my best friend, and my greatest adventure.

Here's to celebrating you today, and to all the beautiful tomorrows we have yet to share.

With all my love, always and forever.`;

  return (
    <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 pb-16 relative mt-12 mb-20">
      <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-6 rotate-12 z-20">
        <div className="w-16 h-16 bg-bdayPink rounded-full shadow-lg flex items-center justify-center border-4 border-white">
          <span className="text-2xl">💌</span>
        </div>
      </div>
      
      <div className="font-sans text-lg md:text-xl text-bdayDark/80 leading-relaxed whitespace-pre-wrap">
        <TypewriterMessage text={fullText} speed={50} />
      </div>
    </div>
  );
};

export default BirthdayLetter;
