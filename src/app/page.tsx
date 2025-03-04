import Hero from '@/components/sections/home/Hero';
import FeaturedProjects from '@/components/sections/home/FeaturedProjects';

export const metadata = {
  title: 'Alper Sahin | Computer Engineering & Economics Student',
  description: 'Personal portfolio of Alper Sahin, a Computer Engineering and Economics student at Koç University, passionate about software development and entrepreneurship.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}
