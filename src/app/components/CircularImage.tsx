'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import KUTE from 'kute.js/dist/kute.min';

interface CircularImageProps {
  src: string;
  alt: string;
  size?: number; // diameter in pixels
}

export default function CircularImage({ src, alt, size = 200 }: CircularImageProps) {
  useEffect(() => {
    try {
      // Make sure the DOM elements are fully loaded before starting animations
      setTimeout(() => {
        // Simple rotation animations instead of complex path morphing
        const blob1 = document.getElementById('blob1');
        const blob2 = document.getElementById('blob2');
        
        if (blob1 && blob2) {
          // First blob - translate animation
          const tween1 = KUTE.fromTo(
            blob1,
            { rotate: 0 },
            { rotate: 360 },
            { 
              repeat: 999,
              duration: 60000,
              easing: 'linear'
            }
          );
          
          // Second blob - reverse rotation
          const tween2 = KUTE.fromTo(
            blob2,
            { rotate: 0 },
            { rotate: -360 },
            { 
              repeat: 999,
              duration: 65000,
              easing: 'linear'
            }
          );
          
          tween1.start();
          tween2.start();
        } else {
          console.error('Could not find blob elements');
        }
      }, 100);
    } catch (error) {
      console.error('Animation error:', error);
    }
  }, []);

  const containerSize = size * 1.4; // Increased to show more of the blob

  return (
    <div className="relative" style={{ width: containerSize, height: containerSize }}>
      {/* Animated background blobs */}
      <svg
        viewBox="-180 -180 360 360"
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'scale(1.05)' }}
      >
        <g id="blob1">
          <path
            d="M140 0C140 45 130 90 90 130C50 170 0 140 -50 130C-90 120 -140 90 -140 45C-140 0 -140 -45 -90 -130C-50 -170 0 -140 50 -130C90 -120 140 -45 140 0Z"
            fill="#6600FF"
            opacity="0.4"
          />
        </g>
      </svg>
      
      <svg
        viewBox="-180 -180 360 360"
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'scale(1.0)' }}
      >
        <g id="blob2">
          <path
            d="M145 5C145 50 135 95 95 135C55 175 5 145 -45 135C-85 125 -145 95 -145 50C-145 5 -145 -40 -95 -135C-55 -175 -5 -145 45 -135C85 -125 145 -40 145 5Z"
            fill="#6600FF"
            opacity="0.6"
          />
        </g>
      </svg>

      {/* Circular image container */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden bg-gray-200"
        style={{ 
          width: size,
          height: size,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
}