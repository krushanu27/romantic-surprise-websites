import React, { useState, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/music/birthday-theme.mp3'));

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
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMusic}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-colors ${
        isPlaying ? 'bg-bdayRose text-white' : 'bg-white text-bdayDark hover:bg-bdayPink'
      }`}
      aria-label="Toggle background music"
    >
      {isPlaying ? <Music className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
    </motion.button>
  );
};

export default MusicToggle;
