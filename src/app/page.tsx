import SocialLinks from './components/SocialLinks';
import WavyBackground from './components/WavyBackground';
import CircularImage from './components/CircularImage';

export default function Home() {
  return (
    <>
      <WavyBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center">
        <div className="mt-32">
          <CircularImage
            src="/Assets/image.png"
            alt="Profile Image"
            size={240}
          />
        </div>
        <SocialLinks />
      </main>
    </>
  );
}
