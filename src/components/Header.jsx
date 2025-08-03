import { useEffect, useState } from 'react';

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header 
      className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
      id="home"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center"
        style={{ filter: 'blur(2px)' }}
      ></div>

      {/* Content */}
      <div className={`relative z-20 text-center px-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Modern Web Solutions <span className="text-indigo-300">for Tomorrow</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          We craft high-performance, responsive websites with cutting-edge technologies
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#services" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-4 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;