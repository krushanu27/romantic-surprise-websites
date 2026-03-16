import React, { useState, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';

const BackgroundMusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/music/anniversary-theme.mp3'));

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-softCream hover:bg-white/20 hover:text-accentGold transition-all shadow-lg hover:scale-110"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Music className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
};

export default BackgroundMusicToggle;
