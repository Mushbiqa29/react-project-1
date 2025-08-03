import { useState, useEffect } from 'react';
import { FiHome, FiInfo, FiSettings, FiMail, FiX, FiMenu } from 'react-icons/fi';

const navLinks = [
  {
    name: "Home",
    icon: <FiHome className="mr-2" />,
    href: "#home",
    className: "hover:text-purple-500"
  },
  {
    name: "About",
    icon: <FiInfo className="mr-2" />,
    href: "#about",
    className: "hover:text-purple-500"
  },
  {
    name: "Services",
    icon: <FiSettings className="mr-2" />,
    href: "#services",
    className: "hover:text-purple-500"
  },
  {
    name: "Contact",
    icon: <FiMail className="mr-2" />,
    href: "#contact",
    className: "hover:text-purple-500"
  },
];

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NexaWeb
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className={`flex items-center transition-colors text-indigo-500 ${link.className}`}
              >
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              NexaWeb
            </a>
            <button 
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${link.className}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;