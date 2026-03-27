import React, { useEffect, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

if (!window.__birthdayBgAudio) {
  window.__birthdayBgAudio = new Audio('/music/ambient.mp3');
  window.__birthdayBgAudio.loop = true;
  window.__birthdayBgAudio.volume = 0.3;
}

const audio = window.__birthdayBgAudio;
let fadeInterval = null;

export const playBackgroundMusic = () => {
  if (fadeInterval) clearInterval(fadeInterval);
  audio.play().catch(() => { });
};

export const pauseBackgroundMusic = () => {
  if (fadeInterval) clearInterval(fadeInterval);
  audio.pause();
};

export const fadeOutMusic = (step = 0.02, interval = 100) => {
  return new Promise((resolve) => {
    if (fadeInterval) clearInterval(fadeInterval);

    fadeInterval = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume = Math.max(0.05, audio.volume - step);
      } else {
        clearInterval(fadeInterval);
        fadeInterval = null;
        resolve();
      }
    }, interval);
  });
};

export const fadeInMusic = (target = 0.35, step = 0.02, interval = 100) => {
  if (fadeInterval) clearInterval(fadeInterval);

  audio.volume = 0.05;

  fadeInterval = setInterval(() => {
    if (audio.volume < target) {
      audio.volume = Math.min(target, audio.volume + step);
    } else {
      clearInterval(fadeInterval);
      fadeInterval = null;
    }
  }, interval);
};

export const switchToFavoriteTrack = async () => {
  // already switched → do nothing
  if (window.__favoriteStarted) return;

  window.__favoriteStarted = true;

  await fadeOutMusic();

  audio.src = '/music/favorite.mp3';
  audio.currentTime = 0;

  playBackgroundMusic();
  fadeInMusic();
};

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(!audio.paused);

  useEffect(() => {
    const sync = () => setIsPlaying(!audio.paused);

    audio.addEventListener('play', sync);
    audio.addEventListener('pause', sync);

    return () => {
      audio.removeEventListener('play', sync);
      audio.removeEventListener('pause', sync);
    };
  }, []);

  const toggleMusic = () => {
    if (audio.paused) {
      playBackgroundMusic();
    } else {
      pauseBackgroundMusic();
    }
  };

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md shadow-lg"
    >
      {isPlaying ? <Music /> : <VolumeX />}
    </motion.button>
  );
};

export default MusicToggle;