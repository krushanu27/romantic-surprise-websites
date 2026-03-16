import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/5 bg-darkBg text-center relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2">
        <p className="font-serif text-softCream/60 italic text-sm">
          A timeless collection of our memories, designed with endless love.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-softCream/40 tracking-widest uppercase mt-4">
          <span>Forever & Always</span>
          <Heart className="w-3 h-3 text-accentRose mx-1" fill="currentColor" />
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
