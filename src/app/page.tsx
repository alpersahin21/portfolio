import Hero from "@/components/sections/home/Hero";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";

export const metadata = {
  title: "Alper Sahin | Fullstack Developer",
  description:
    "Personal portfolio of Alper Sahin, a Fullstack Developer at Codeway, passionate about software development and entrepreneurship.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}
