'use client';

import { useState, useEffect, useCallback } from 'react';

export default function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsTypingComplete(false);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    startTyping();
  }, [startTyping]);

  return (
    <h1 
      onClick={startTyping} 
      className={`cursor-pointer relative ${className}`}
    >
      {displayText}
      <span className={`absolute ml-1 -mr-1 ${isTypingComplete ? 'animate-cursor' : 'opacity-100'}`}>
        |
      </span>
    </h1>
  );
} 