'use client';

export default function WavyBackground() {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-gray-900 overflow-hidden" style={{ minHeight: '100dvh' }}>
      <style jsx>{`
        @keyframes waveAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1800px);
          }
        }
        
        #wave1, #wave1-2 {
          animation: waveAnimation 61s linear infinite;
        }
        #wave2, #wave2-2 {
          animation: waveAnimation 67s linear infinite;
        }
        #wave3, #wave3-2 {
          animation: waveAnimation 71s linear infinite;
        }
        
        #wave1-2 {d
          transform: translateX(1800px);
        }
        #wave2-2 {
          transform: translateX(1800px);
        }
        #wave3-2 {
          transform: translateX(1800px);
        }
      `}</style>
      <svg
        id="visual"
        viewBox="0 0 3600 600"
        className="absolute inset-0 w-[400%] h-full select-none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ touchAction: 'none' }}
      >
        <defs>
          <path
            id="wavePath1"
            d="M0 420C100 420 150 460 200 450C250 440 300 420 350 410C400 400 450 420 500 430C550 440 600 420 650 410C700 400 750 420 800 430C850 440 900 420 950 410C1000 400 1050 420 1100 430C1150 440 1200 420 1250 410C1300 400 1350 420 1400 430C1450 440 1500 420 1550 410C1600 400 1650 420 1700 430C1750 440 1800 420 1800 420L1800 601L0 601Z"
          />
          <path
            id="wavePath2"
            d="M0 460C100 460 150 500 200 490C250 480 300 460 350 450C400 440 450 460 500 470C550 480 600 460 650 450C700 440 750 460 800 470C850 480 900 460 950 450C1000 440 1050 460 1100 470C1150 480 1200 460 1250 450C1300 440 1350 460 1400 470C1450 480 1500 460 1550 450C1600 440 1650 460 1700 470C1750 480 1800 460 1800 460L1800 601L0 601Z"
          />
          <path
            id="wavePath3"
            d="M0 500C100 500 150 540 200 530C250 520 300 500 350 490C400 480 450 500 500 510C550 520 600 500 650 490C700 480 750 500 800 510C850 520 900 500 950 490C1000 480 1050 500 1100 510C1150 520 1200 500 1250 490C1300 480 1350 500 1400 510C1450 520 1500 500 1550 490C1600 480 1650 500 1700 510C1750 520 1800 500 1800 500L1800 601L0 601Z"
          />
        </defs>
        <g>
          {/* First wave layer */}
          <use href="#wavePath1" id="wave1" x="0" fill="#6600FF" opacity="0.4" />
          <use href="#wavePath1" id="wave1-2" x="1800" fill="#6600FF" opacity="0.4" />
          
          {/* Second wave layer */}
          <use href="#wavePath2" id="wave2" x="0" fill="#6600FF" opacity="0.6" />
          <use href="#wavePath2" id="wave2-2" x="1800" fill="#6600FF" opacity="0.6" />
          
          {/* Third wave layer */}
          <use href="#wavePath3" id="wave3" x="0" fill="#6600FF" opacity="0.8" />
          <use href="#wavePath3" id="wave3-2" x="1800" fill="#6600FF" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}