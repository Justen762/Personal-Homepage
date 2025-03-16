'use client';

import { useEffect } from 'react';
import KUTE from 'kute.js/dist/kute.min';

export default function WavyBackground() {
  useEffect(() => {
    try {
      // The total width of one complete wave pattern
      const totalWidth = 1800;
      
      // First wave animation - starting at -400px (slightly ahead)
      const tween1 = KUTE.fromTo(
        '#wave1',
        { translateX: -400 },
        { translateX: -400 - totalWidth },
        { 
          repeat: 999,
          duration: 65000,
          easing: 'linear'
        }
      );

      // Second wave animation - starting at -900px (half of total width)
      const tween2 = KUTE.fromTo(
        '#wave2',
        { translateX: -900 },
        { translateX: -900 - totalWidth },
        { 
          repeat: 999,
          duration: 70000,
          easing: 'linear'
        }
      );

      // Third wave animation - starting at -1350px (3/4 of total width)
      const tween3 = KUTE.fromTo(
        '#wave3',
        { translateX: -1350 },
        { translateX: -1350 - totalWidth },
        { 
          repeat: 999,
          duration: 60000,
          easing: 'linear'
        }
      );

      // Start all animations
      tween1.start();
      tween2.start();
      tween3.start();
      
      // Cleanup function
      return () => {
        tween1.stop();
        tween2.stop();
        tween3.stop();
      };
    } catch (error) {
      console.error('KUTE animation error:', error);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full min-h-screen bg-gray-900 overflow-hidden" style={{ minHeight: '100dvh' }}>
      <svg
        id="visual"
        viewBox="0 0 3600 600"
        className="absolute inset-0 w-[400%] h-full select-none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ touchAction: 'none' }}
      >
        <g>
          {/* First wave layer with -400px offset */}
          <path
            id="wave1"
            d="M0 420C100 420 150 460 200 450C250 440 300 420 350 410C400 400 450 420 500 430C550 440 600 420 650 410C700 400 750 420 800 430C850 440 900 420 950 410C1000 400 1050 420 1100 430C1150 440 1200 420 1250 410C1300 400 1350 420 1400 430C1450 440 1500 420 1550 410C1600 400 1650 420 1700 430C1750 440 1800 420 1800 420L1800 601L0 601Z M1800 420C1900 420 1950 460 2000 450C2050 440 2100 420 2150 410C2200 400 2250 420 2300 430C2350 440 2400 420 2450 410C2500 400 2550 420 2600 430C2650 440 2700 420 2750 410C2800 400 2850 420 2900 430C2950 440 3000 420 3050 410C3100 400 3150 420 3200 430C3250 440 3300 420 3350 410C3400 400 3450 420 3500 430C3550 440 3600 420 3600 420L3600 601L1800 601Z"
            fill="#6600FF"
            opacity="0.4"
            style={{ transform: 'translateX(-400px)' }}
          />
          {/* Second wave layer with -900px offset */}
          <path
            id="wave2"
            d="M0 460C100 460 150 500 200 490C250 480 300 460 350 450C400 440 450 460 500 470C550 480 600 460 650 450C700 440 750 460 800 470C850 480 900 460 950 450C1000 440 1050 460 1100 470C1150 480 1200 460 1250 450C1300 440 1350 460 1400 470C1450 480 1500 460 1550 450C1600 440 1650 460 1700 470C1750 480 1800 460 1800 460L1800 601L0 601Z M1800 460C1900 460 1950 500 2000 490C2050 480 2100 460 2150 450C2200 440 2250 460 2300 470C2350 480 2400 460 2450 450C2500 440 2550 460 2600 470C2650 480 2700 460 2750 450C2800 440 2850 460 2900 470C2950 480 3000 460 3050 450C3100 440 3150 460 3200 470C3250 480 3300 460 3350 450C3400 440 3450 460 3500 470C3550 480 3600 460 3600 460L3600 601L1800 601Z"
            fill="#6600FF"
            opacity="0.6"
            style={{ transform: 'translateX(-900px)' }}
          />
          {/* Third wave layer with -1350px offset */}
          <path
            id="wave3"
            d="M0 500C100 500 150 540 200 530C250 520 300 500 350 490C400 480 450 500 500 510C550 520 600 500 650 490C700 480 750 500 800 510C850 520 900 500 950 490C1000 480 1050 500 1100 510C1150 520 1200 500 1250 490C1300 480 1350 500 1400 510C1450 520 1500 500 1550 490C1600 480 1650 500 1700 510C1750 520 1800 500 1800 500L1800 601L0 601Z M1800 500C1900 500 1950 540 2000 530C2050 520 2100 500 2150 490C2200 480 2250 500 2300 510C2350 520 2400 500 2450 490C2500 480 2550 500 2600 510C2650 520 2700 500 2750 490C2800 480 2850 500 2900 510C2950 520 3000 500 3050 490C3100 480 3150 500 3200 510C3250 520 3300 500 3350 490C3400 480 3450 500 3500 510C3550 520 3600 500 3600 500L3600 601L1800 601Z"
            fill="#6600FF"
            opacity="0.8"
            style={{ transform: 'translateX(-1350px)' }}
          />
        </g>
      </svg>
    </div>
  );
}