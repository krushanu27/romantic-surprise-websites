import React from 'react';
import { Gift } from 'lucide-react';

const QRReveal = () => {
  return (
    <div className="glass-card p-8 w-full max-w-sm mx-auto text-center border-2 border-bdayRose/30 hover:border-bdayRose transition-colors">
      <Gift className="w-12 h-12 text-bdayRose mx-auto mb-4" />
      <h3 className="font-display text-xl text-bdayDark mb-2">Scan Your Final Gift</h3>
      <p className="text-bdayDark/60 mb-6 text-sm">Scan this code to reveal your real life present!</p>
      
      <div className="w-48 h-48 bg-white p-2 mx-auto rounded-lg shadow-inner flex items-center justify-center">
         {/* Placeholder for actual QR code */}
         <div className="w-full h-full border-4 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
           <span className="font-bold mb-1">[ QR CODE ]</span>
           <span className="text-xs">Your Link Here</span>
         </div>
      </div>
    </div>
  );
};

export default QRReveal;
