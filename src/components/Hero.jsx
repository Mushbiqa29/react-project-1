import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
              alt="Coding" 
              className="w-full h-auto rounded-xl shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Innovative Development
              </span> with React & Vite
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We leverage the power of modern frontend technologies to deliver blazing-fast, 
              scalable web applications with exceptional user experiences. Our team specializes 
              in creating performant solutions that drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                Explore Our Work <FiArrowRight className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium rounded-lg transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;