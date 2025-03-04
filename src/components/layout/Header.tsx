import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#FBFCFC]/90 backdrop-blur-md py-4 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black">
          alper.sh
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-black transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-black transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-gray-700 hover:text-black transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <a 
                href="/files/Alper_Sahin_CV.pdf" 
                download
                className="px-4 py-2 bg-[#7D9D9C] hover:bg-[#576F72] text-white rounded-md transition-colors"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 