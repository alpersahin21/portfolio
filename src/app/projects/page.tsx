import { Metadata } from 'next';
import ProjectCard from '@/components/sections/projects/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my software development projects, including web applications, mobile apps, and more.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <p className="text-gray-700 mb-8">
        Here are some of the projects I've worked on. Each project represents different skills and technologies I've learned throughout my journey as a developer.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}