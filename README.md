# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- **Modern UI**: Clean, minimalistic design with dark mode support
- **Responsive**: Fully responsive layout that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper metadata and static generation for better SEO
- **Easy to Customize**: Simple structure to update with your own information

## Pages

- **Home**: Introduction and featured projects
- **About**: Education, skills, and career goals
- **Projects**: Showcase of all projects with detailed project pages

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans and Geist Mono
- **Deployment**: Ready to deploy on Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/sections/home/Hero.tsx`: Update your name and tagline
- `src/components/sections/about/Education.tsx`: Update your education history
- `src/components/sections/about/Skills.tsx`: Update your skills and technologies
- `src/components/sections/about/CareerGoals.tsx`: Update your career goals
- `src/components/layout/Footer.tsx`: Update your social media links

### Projects

Update your projects in the `src/data/projects.ts` file.

### Styling

The website uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements in the `tailwind.config.js` file.

## Deployment

The easiest way to deploy your portfolio website is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
