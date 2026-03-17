import React, { useEffect, useState } from 'react';
import { Music, VolumeX } from 'lucide-react';

/* ✅ SINGLE GLOBAL AUDIO INSTANCE (critical fix) */
if (!window.__bgAudio) {
  window.__bgAudio = new Audio('/music/blue.mp3');
  window.__bgAudio.loop = true;
  window.__bgAudio.volume = 0.35;
}

const audio = window.__bgAudio;

let fadeInterval = null;

/* ▶️ PLAY */
export const playBackgroundMusic = () => {
  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }

  audio.play().catch((e) => {
    console.log('Audio play failed:', e);
  });
};

/* ⏸ PAUSE */
export const pauseBackgroundMusic = () => {
  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }

  audio.pause();
};

/* 🎚 FADE */
export const fadeBackgroundMusic = (
  targetVolume = 0.02,
  step = 0.04,
  interval = 120
) => {
  console.log("FADE STARTED");

  if (fadeInterval) {
    clearInterval(fadeInterval);
  }

  fadeInterval = setInterval(() => {
    console.log("Volume:", audio.volume);

    if (audio.paused) {
      clearInterval(fadeInterval);
      fadeInterval = null;
      return;
    }

    if (audio.volume > targetVolume) {
      audio.volume = Math.max(targetVolume, audio.volume - step);
    } else {
      console.log("FADE COMPLETE");
      clearInterval(fadeInterval);
      fadeInterval = null;
    }
  }, interval);
};

/* 🔊 RESET VOLUME */
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
      resetBackgroundMusicVolume(0.35); // ensure full volume when restarting
      playBackgroundMusic();
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