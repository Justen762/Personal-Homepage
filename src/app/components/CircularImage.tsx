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
      // Animate the first blob
      const tween1 = KUTE.fromTo(
        '#blob1',
        { 
          path: 'M98.1 -150.6C122.6 -136.8 135 -102.1 149.1 -68.8C163.2 -35.5 179.1 -3.7 192.3 40.2C205.6 84.2 216.1 140.3 193.1 167.8C170 195.3 113.3 194.1 63.2 203.2C13.1 212.4 -30.3 231.9 -63.3 220.1C-96.3 208.4 -118.8 165.4 -139.3 128.3C-159.9 91.1 -178.4 59.7 -183.4 26.3C-188.3 -7.2 -179.7 -42.6 -169.6 -82.8C-159.6 -123 -148.2 -167.9 -119.7 -179.9C-91.2 -191.9 -45.6 -171 -4.4 -164.1C36.8 -157.2 73.5 -164.4 98.1 -150.6'
        },
        { 
          path: 'M115.4 -137.9C157.9 -92.9 206.9 -46.4 209.4 2.5C211.9 51.4 167.9 102.9 125.4 131.9C82.9 160.9 41.4 167.4 -1.6 169C-44.6 170.6 -89.3 167.3 -121.8 138.3C-154.3 109.3 -174.6 54.6 -180.1 -4.5C-185.6 -63.6 -176.3 -127.3 -143.8 -172.3C-111.3 -217.3 -55.6 -243.6 -4.7 -238.9C46.2 -234.2 92.4 -198.4 115.4 -137.9'
        },
        { 
          repeat: 999,
          duration: 3000,
          yoyo: true,
          easing: 'easingCubicInOut'
        }
      );

      // Animate the second blob
      const tween2 = KUTE.fromTo(
        '#blob2',
        {
          path: 'M98.1 -150.6C122.6 -136.8 135 -102.1 149.1 -68.8C163.2 -35.5 179.1 -3.7 192.3 40.2C205.6 84.2 216.1 140.3 193.1 167.8C170 195.3 113.3 194.1 63.2 203.2C13.1 212.4 -30.3 231.9 -63.3 220.1C-96.3 208.4 -118.8 165.4 -139.3 128.3C-159.9 91.1 -178.4 59.7 -183.4 26.3C-188.3 -7.2 -179.7 -42.6 -169.6 -82.8C-159.6 -123 -148.2 -167.9 -119.7 -179.9C-91.2 -191.9 -45.6 -171 -4.4 -164.1C36.8 -157.2 73.5 -164.4 98.1 -150.6'
        },
        {
          path: 'M162.3 -234.3C207.9 -198.3 240.4 -149.1 255.6 -95.6C270.8 -42 268.9 15.9 251.6 67.4C234.3 118.9 201.6 163.9 156 190.6C110.3 217.3 51.7 225.6 -4.2 231.1C-60.2 236.5 -113.3 239 -159.1 212.3C-204.8 185.7 -243 129.8 -260.7 66.5C-278.3 3.2 -275.2 -67.5 -247.5 -124.2C-219.8 -180.8 -167.4 -223.4 -111.6 -254.4C-55.8 -285.4 3.3 -304.7 55.8 -285.4C108.3 -266 151.1 -208 162.3 -234.3'
        },
        { 
          repeat: 999,
          duration: 4000,
          yoyo: true,
          easing: 'easingCubicInOut'
        }
      );

      tween1.start();
      tween2.start();

      return () => {
        tween1.stop();
        tween2.stop();
      };
    } catch (error) {
      console.error('Animation error:', error);
    }
  }, []);

  const containerSize = size * 1.5; // Make the container larger than the image to show the animated background

  return (
    <div className="relative" style={{ width: containerSize, height: containerSize }}>
      {/* Animated background blobs */}
      <svg
        viewBox="-300 -300 600 600"
        className="absolute inset-0 w-full h-full animate-spin-slow"
        style={{ transform: 'rotate(0deg)' }}
      >
        <g>
          <path
            id="blob1"
            d="M98.1 -150.6C122.6 -136.8 135 -102.1 149.1 -68.8C163.2 -35.5 179.1 -3.7 192.3 40.2C205.6 84.2 216.1 140.3 193.1 167.8C170 195.3 113.3 194.1 63.2 203.2C13.1 212.4 -30.3 231.9 -63.3 220.1C-96.3 208.4 -118.8 165.4 -139.3 128.3C-159.9 91.1 -178.4 59.7 -183.4 26.3C-188.3 -7.2 -179.7 -42.6 -169.6 -82.8C-159.6 -123 -148.2 -167.9 -119.7 -179.9C-91.2 -191.9 -45.6 -171 -4.4 -164.1C36.8 -157.2 73.5 -164.4 98.1 -150.6"
            fill="#6600FF"
            opacity="0.3"
          />
        </g>
      </svg>
      <svg
        viewBox="-300 -300 600 600"
        className="absolute inset-0 w-full h-full animate-reverse-spin-slow"
        style={{ transform: 'rotate(0deg)' }}
      >
        <g>
          <path
            id="blob2"
            d="M98.1 -150.6C122.6 -136.8 135 -102.1 149.1 -68.8C163.2 -35.5 179.1 -3.7 192.3 40.2C205.6 84.2 216.1 140.3 193.1 167.8C170 195.3 113.3 194.1 63.2 203.2C13.1 212.4 -30.3 231.9 -63.3 220.1C-96.3 208.4 -118.8 165.4 -139.3 128.3C-159.9 91.1 -178.4 59.7 -183.4 26.3C-188.3 -7.2 -179.7 -42.6 -169.6 -82.8C-159.6 -123 -148.2 -167.9 -119.7 -179.9C-91.2 -191.9 -45.6 -171 -4.4 -164.1C36.8 -157.2 73.5 -164.4 98.1 -150.6"
            fill="#6600FF"
            opacity="0.3"
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