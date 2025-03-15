'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export default function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTyping = () => {
    setDisplayText('');
    setCurrentIndex(0);
  };

  useEffect(() => {
    // Start typing when component mounts
    startTyping();
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <h1 
      className={`${className} cursor-pointer block w-full text-center`}
      onClick={startTyping}
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
} 