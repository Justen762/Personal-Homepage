import TypewriterText from './components/TypewriterText';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center pt-16">
      <div className="flex flex-col items-center text-center">
        {/* Hero Section */}
        <TypewriterText 
          text="Hi, I'm Justen"
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        />
        
        {/* Social Links */}
        <SocialLinks />

        {/* About Section */}
        <p className="text-lg leading-relaxed text-center mt-8">
          I'm a software developer passionate about creating elegant solutions to complex problems.
          This is my minimal homepage where I share my thoughts and work.
        </p>
      </div>
    </main>
  );
}
