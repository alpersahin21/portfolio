export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-portfolio',
    slug: 'personal-portfolio',
    title: 'alper.sh',
    description: 'A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.',
    longDescription: 'This portfolio website serves as a central hub to showcase my projects, skills, and experience. Built with Next.js and React, it features a clean, responsive design with subtle animations and a carefully selected color scheme. The site includes project showcases with detailed descriptions, an about page highlighting my education and experience, and optimized performance with server-side rendering. The modular component structure and clean code organization demonstrate my approach to front-end development.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'CSS Animations'],
    features: [
      'Clean, modern UI with a carefully selected color scheme',
      'Responsive design that works seamlessly on all devices',
      'Subtle animations and interactive elements for enhanced user experience',
      'Project showcase with detailed descriptions and links',
      'About page with education, experience, and skills sections',
      'Optimized performance with Next.js server-side rendering',
      'Modular component structure for maintainability'
    ],
    github: 'https://github.com/alpersahin21/portfolio',
    featured: true
  },
  {
    id: 'project-melascan',
    slug: 'melascan',
    title: 'MelaScan - AI Powered Melanoma Detection',
    description: 'An AI-powered mobile application for early detection of melanoma skin cancer using image classification.',
    longDescription: 'MelaScan is an AI-powered melanoma detection application that enables users to assess their nevi\'s skin cancer risk without visiting a doctor. The app aims to reduce the cost and need for medical consultation in the pre-diagnosis stage of melanoma, the 5th most common cancer. Users can take photos of their nevi using the mobile application, which then utilizes a CNN classifier to analyze the images and provide risk assessments with visual explanations.',
    technologies: ['React Native', 'Spring Boot', 'Flask', 'PyTorch', 'OpenCV', 'NumPy', 'CNN', 'AWS S3', 'MySQL', 'Python', 'Grad-CAM'],
    features: [
      'AI-powered melanoma risk assessment using CNN classification',
      'Image preprocessing and segmentation for accurate detection',
      'Visual explanations with Grad-CAM, Heat Map, and Saliency Map',
      'User-friendly mobile interface built with React Native',
      'Secure backend with Spring Framework and JWT authentication',
      'Cloud storage integration with AWS S3',
      'Traditional ABCDE approach combined with deep learning methods'
    ],
    github: 'https://github.com/alpersahin21/melascan-app',
    featured: true
  },
  {
    id: 'project-wc-tournament',
    slug: 'wc-tournament-backend',
    title: 'World Cup Tournament Backend',
    description: 'A Spring Boot backend service for managing virtual World Cup tournaments in a mobile game, including user participation, leaderboards, and rewards.',
    longDescription: 'This project implements a robust backend service for a mobile game that simulates World Cup tournaments. Users from different countries (Turkey, United States, United Kingdom, France, or Germany) can join tournaments if they meet level and coin requirements. The system creates balanced tournament groups with 5 users each from different countries, maintains real-time leaderboards, and handles reward distribution based on user rankings. The architecture follows clean design principles with distinct layers for entities, repositories, services, and controllers.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JPA/Hibernate', 'REST API', 'Maven', 'Lombok'],
    features: [
      'User eligibility validation for tournament participation',
      'Balanced tournament group creation with country diversity',
      'Real-time group and country leaderboards',
      'Automated reward distribution based on tournament rankings',
      'Scheduled tournament creation using Spring\'s @Scheduled',
      'Transactional data consistency with @Transactional',
      'Clean architecture with separation of concerns',
      'Comprehensive exception handling for business rule violations'
    ],
    github: 'https://github.com/alpersahin21/wc-tournament-backend',
    featured: true
  },
  {
    id: 'project-covid-dp',
    slug: 'covid-differential-privacy',
    title: 'Privacy-Preserving COVID-19 Data Analysis',
    description: 'A differential privacy implementation for analyzing COVID-19 patient data while protecting sensitive information.',
    longDescription: 'This project leverages Differential Privacy (DP) techniques to analyze and predict COVID-19 patient risks using a large-scale dataset. By incorporating algorithms such as Gaussian Noise, Report Noisy Max, and the Exponential Mechanism, we ensure the protection of sensitive patient information while providing meaningful insights. This project addresses the critical need for privacy-preserving data analysis in healthcare, balancing privacy with actionable utility.',
    technologies: ['Python', 'NumPy', 'MySQL', 'ttkbootstrap', 'Matplotlib', 'Differential Privacy'],
    features: [
      'Implementation of multiple differential privacy algorithms (Gaussian Noise, Report Noisy Max, Exponential Mechanism)',
      'Analysis of COVID-19 patient data with privacy guarantees',
      'Risk prediction while maintaining patient confidentiality',
      'Balance between data utility and privacy protection',
      'Interactive visualization of privacy-preserved data analysis',
      'Configurable privacy parameters to adjust the privacy-utility tradeoff'
    ],
    github: 'https://github.com/alpersahin21/comp430-Differential-Privacy-Implementation-for-Covid-19-DataAnalysis',
    featured: true
  },
  {
    id: 'project-law-firm',
    slug: 'law-firm-database',
    title: 'Law Firm Database Management System',
    description: 'A comprehensive database management system for an imaginary law firm with a user-friendly GUI.',
    longDescription: 'This project implements a complete database management system for an imaginary law firm, featuring a modern GUI built with customtkinter. The system manages lawyers, clients, lawsuits, departments, and counseling appointments with robust data validation and visualization capabilities. It includes database triggers to enforce gender diversity policies, comprehensive search and filtering options, and statistical analysis tools to visualize case outcomes and lawyer performance.',
    technologies: ['Python', 'MySQL', 'customtkinter', 'Matplotlib', 'Pandas', 'Tkinter', 'Regular Expressions'],
    features: [
      'Secure login system with role-based access control',
      'Complete CRUD operations for lawyers, clients, lawsuits, and departments',
      'Interactive data visualization with Matplotlib for case statistics and lawyer performance',
      'Database triggers to enforce company policies (e.g., gender diversity requirements)',
      'Advanced filtering and search capabilities across all entities',
      'Data validation using regular expressions to ensure data integrity',
      'Client fee calculation and financial tracking system',
      'Comprehensive case outcome analysis with verdict statistics'
    ],
    github: 'https://github.com/alpersahin21/comp306-database-project',
    featured: true
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).slice(0, 4);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};