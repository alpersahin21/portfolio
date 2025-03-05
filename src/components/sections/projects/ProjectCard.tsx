import Link from 'next/link';

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    github: string;
    demo?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="p-6">
        <Link href={`/projects/${project.slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 hover:text-[#7D9D9C] transition-colors">{project.title}</h3>
        </Link>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#7D9D9C] hover:underline"
          >
            {project.slug === 'melascan' ? 'Mobile Repository' : 'GitHub Repository'}
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#7D9D9C] hover:underline"
            >
              Live Demo
            </a>
          )}
          <Link 
            href={`/projects/${project.slug}`}
            className="text-[#7D9D9C] hover:underline ml-auto"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 