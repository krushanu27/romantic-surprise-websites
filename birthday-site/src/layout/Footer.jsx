import React from 'react';
import { Gift } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <Gift className="w-6 h-6 text-bdayRose mb-2 opacity-50" />
        <p className="font-script text-xl text-bdayDark/60">
          Made with so much love, just for you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
