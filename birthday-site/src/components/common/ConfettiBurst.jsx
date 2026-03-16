import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiBurst = ({ trigger, duration = 3000 }) => {
  useEffect(() => {
    if (trigger) {
      var end = Date.now() + duration;

      var colors = ['#D291BC', '#E0BBE4', '#F7E7CE', '#FDEFEF'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  }, [trigger, duration]);

  return null;
};

export default ConfettiBurst;
