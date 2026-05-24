'use client';

import React, { useState, useEffect } from 'react';

interface FlipWordsProps {
  words: string[];
  duration?: number; // ms each word is shown
  className?: string;
}

export default function FlipWords({ words, duration = 2500, className = '' }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setIsFlipping(true);

      // After exit animation completes, swap word and start enter animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
      }, 400); // must match the CSS animation duration
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span
      className={`inline-block overflow-hidden relative ${className}`}
      style={{ verticalAlign: 'bottom' }}
    >
      <span
        key={currentIndex}
        className={`inline-block transition-all ${isFlipping ? 'flip-exit' : 'flip-enter'}`}
        style={{
          display: 'inline-block',
          animation: isFlipping
            ? 'flipExit 0.4s ease-in forwards'
            : 'flipEnter 0.4s ease-out forwards',
        }}
      >
        {words[currentIndex]}
      </span>

      <style>{`
        @keyframes flipEnter {
          0% {
            opacity: 0;
            transform: rotateX(-90deg) translateY(20px);
            filter: blur(4px);
          }
          60% {
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0px);
            filter: blur(0px);
          }
        }

        @keyframes flipExit {
          0% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0px);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: rotateX(90deg) translateY(-20px);
            filter: blur(4px);
          }
        }
      `}</style>
    </span>
  );
}
