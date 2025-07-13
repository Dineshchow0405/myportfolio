import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Calendar, Filter } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

const Projects = () => {
  const { portfolioData, loading, trackPageView } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    trackPageView('projects');
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading projects..." />
      </div>
    );
  }

  const projects = portfolioData?.projects || [];
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects and innovations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 text-gray-300 mb-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 overflow-hidden">
                    <motion.img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-purple-400 font-medium bg-purple-600/20 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-600/20 border border-blue-400/30 rounded-full px-2 py-1 text-xs font-medium text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3 mt-auto">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      {project.live && project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">
              No projects found in the "{selectedCategory}" category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;