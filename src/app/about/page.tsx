import { Metadata } from 'next';
import Education from '@/components/sections/about/Education';
import Experience from '@/components/sections/about/Experience';
import Leadership from '@/components/sections/about/Leadership';
import Skills from '@/components/sections/about/Skills';
import CareerGoals from '@/components/sections/about/CareerGoals';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Alper Sahin, his education, experience, and skills in software development.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 mb-8">
        I'm a Senior Computer Engineering and Economics student at Koç University with a passion for software development, entrepreneurship, and innovation. I enjoy building applications that solve real-world problems and am constantly learning new technologies to expand my skill set.
      </p>
      
      <Education />
      <Experience />
      <Leadership />
      <Skills />
      <CareerGoals />
    </div>
  );
} 