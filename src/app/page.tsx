import TypewriterText from './components/TypewriterText';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center text-center">
        {/* Hero Section */}
        <TypewriterText 
          text="Hi, I'm Justen"
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        />
        {/* Social Links */}
        <ul className="mt-16 grid grid-flow-col auto-cols-max gap-6 mx-auto w-fit">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </li>
        </ul>

        {/* About Section */}
        <p className="text-lg leading-relaxed text-center mt-16">
          I'm a software developer passionate about creating elegant solutions to complex problems.
          This is my minimal homepage where I share my thoughts and work.
        </p>
      </div>
    </main>
  );
}
