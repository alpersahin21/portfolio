"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#7D9D9C] text-white backdrop-blur-md border-b border-[#6b8a89]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          alper.sh
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 items-center">
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-white hover:text-gray-200 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-white hover:text-gray-200 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <a 
                href="/files/Alper_Sahin_CV.pdf" 
                download
                className="inline-block px-4 py-2 bg-white text-[#7D9D9C] rounded-md transform transition duration-300 ease-in-out hover:shadow-md hover:scale-105 hover:bg-gray-100"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 pb-4 px-6">
            <li>
              <Link 
                href="/" 
                className="block text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="block text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <a 
                href="/files/Alper_Sahin_CV.pdf" 
                download
                className="inline-block px-4 py-2 bg-white text-[#7D9D9C] rounded-md transform transition duration-300 ease-in-out hover:shadow-md hover:scale-105 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header; 