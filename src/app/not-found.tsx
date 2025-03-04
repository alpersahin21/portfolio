import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="text-xl text-gray-700 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-[#7D9D9C] text-white rounded-md transition-all duration-300 hover:shadow-md hover:scale-105 inline-block"
      >
        Return Home
      </Link>
    </div>
  );
} 