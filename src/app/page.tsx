import SocialLinks from './components/SocialLinks';
import WavyBackground from './components/WavyBackground';
import CircularImage from './components/CircularImage';

export default function Home() {
  return (
    <div className="relative">
      {/* Profile section */}
      <section className="relative min-h-screen flex flex-col">
        {/* First WavyBackground */}
        <div className="absolute inset-0">
          <WavyBackground />
        </div>
        <div className="relative z-10 flex flex-col items-center flex-1">
          <CircularImage
            src="/Assets/image.png"
            alt="Profile Image"
            size={240}
          />
          <SocialLinks />
        </div>
      </section>

      {/* Projects section */}
      <section className="relative min-h-screen bg-gray-900">
        {/* Connected inverted waves */}
        <div className="absolute mt-[825px] left-0 right-0">
          <div className="rotate-180 transform-gpu">
            <WavyBackground />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center pt-32">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Projects</h2>
          <div className="grid gap-8">
            {/* Add your project cards here */}
          </div>
        </div>
      </section>
    </div>
  );
}
