'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I&apos;m <span className="text-[#7D9D9C]">Alper Sahin</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
          I&apos;m a senior Computer Engineering and Economics student at Koç University, passionate about software development and entrepreneurship. I focus on solving real-world problems through technology, employing creative and analytical approaches to craft effective solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/projects" 
              className="inline-block px-6 py-3 bg-[#7D9D9C] text-white rounded-md transform transition duration-300 ease-in-out hover:shadow-md hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              href="/about" 
              className="inline-block px-6 py-3 border border-[#7D9D9C] text-[#7D9D9C] rounded-md transform transition duration-300 ease-in-out hover:shadow-md hover:scale-105 hover:border-[#576F72] hover:text-[#576F72]"
            >
              About Me
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="profile-image-container w-64 h-64 md:w-80 md:h-80" onClick={() => window.location.href = '/about'}>
            <div className="pulse-ring pulse-ring-1"></div>
            <div className="pulse-ring pulse-ring-2"></div>
            <div className="profile-image-wrapper">
              <Image 
                src="/images/profile.jpg" 
                alt="Alper Sahin" 
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover pointer-events-none"
                priority
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 