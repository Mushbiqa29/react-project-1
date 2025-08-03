import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Article = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="mb-12" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
        </h2>
        
        <div 
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 overflow-hidden">
              <img 
                className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} 
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop" 
                alt="Vite JS" 
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex items-center mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Technology
                </span>
                <span className="text-gray-500 text-sm ml-4">June 15, 2025</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vite: The Future of Frontend Tooling
              </h3>
              <p className="text-gray-600 mb-6">
                Vite is revolutionizing frontend development with its lightning-fast builds and 
                optimized development experience. By leveraging native ES modules and esbuild, 
                Vite provides near-instantaneous server start and hot module replacement, 
                making it the go-to choice for modern web projects.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Read full article <FiExternalLink className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;