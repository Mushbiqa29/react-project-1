import { FiBook, FiCode, FiTrendingUp, FiDownload, FiGithub } from 'react-icons/fi';

const Links = [
  {
    name: "Vite Documentation",
    icon: <FiBook className="mr-3 text-indigo-600" size={20} />,
    href: "#",
    description: "Official guide to Vite's features and API"
  },
  {
    name: "React Guide",
    icon: <FiCode className="mr-3 text-indigo-600" size={20} />,
    href: "#",
    description: "Learn React with practical examples"
  },
  {
    name: "Frontend Trends",
    icon: <FiTrendingUp className="mr-3 text-indigo-600" size={20} />,
    href: "#",
    description: "Latest developments in frontend tech"
  },
  {
    name: "Performance Tips",
    icon: <FiDownload className="mr-3 text-indigo-600" size={20} />,
    href: "#",
    description: "Optimize your web applications"
  }
];

const Aside = () => {
  return (
    <aside className="lg:w-80 xl:w-96 flex-shrink-0">
      <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Resources</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {Links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="block px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start">
                {link.icon}
                <div>
                  <h3 className="text-base font-medium text-gray-900">{link.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="px-6 py-4 bg-gray-50">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Project on GitHub</h3>
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FiGithub className="mr-2" size={18} />
            View Source
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;