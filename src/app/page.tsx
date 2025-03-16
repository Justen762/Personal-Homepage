import SocialLinks from './components/SocialLinks';
import WavyBackground from './components/WavyBackground';

export default function Home() {
  return (
    <>
      <WavyBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center">
        <div className="mt-32">
        </div>
        <SocialLinks />
      </main>
    </>
  );
}
