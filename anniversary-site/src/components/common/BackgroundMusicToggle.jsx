import React, { useEffect, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';

const audio = new Audio('/music/blue.mp3');
audio.loop = true;
audio.volume = 0.35;

let fadeInterval = null;

export const playBackgroundMusic = () => {
  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }

  audio.play().catch((e) => {
    console.log('Audio play failed:', e);
  });
};

export const pauseBackgroundMusic = () => {
  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }

  audio.pause();
};

export const fadeBackgroundMusic = (targetVolume = 0.12, step = 0.02, interval = 180) => {
  if (fadeInterval) {
    clearInterval(fadeInterval);
  }

  fadeInterval = setInterval(() => {
    if (audio.paused) {
      clearInterval(fadeInterval);
      fadeInterval = null;
      return;
    }

    if (audio.volume > targetVolume) {
      audio.volume = Math.max(targetVolume, audio.volume - step);
    } else {
      clearInterval(fadeInterval);
      fadeInterval = null;
    }
  }, interval);
};

export const resetBackgroundMusicVolume = (volume = 0.35) => {
  audio.volume = volume;
};

const BackgroundMusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(!audio.paused);

  useEffect(() => {
    const syncState = () => setIsPlaying(!audio.paused);

    audio.addEventListener('play', syncState);
    audio.addEventListener('pause', syncState);

    return () => {
      audio.removeEventListener('play', syncState);
      audio.removeEventListener('pause', syncState);
    };
  }, []);

  const toggleMusic = () => {
    if (audio.paused) {
      playBackgroundMusic();
      resetBackgroundMusicVolume(0.35);
    } else {
      pauseBackgroundMusic();
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-softCream hover:bg-white/20 hover:text-accentGold transition-all shadow-lg hover:scale-110"
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <Music className="w-5 h-5 animate-pulse" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  );
};

export default BackgroundMusicToggle;