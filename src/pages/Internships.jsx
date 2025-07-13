import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

const Internships = () => {
  const { portfolioData, loading, trackPageView } = usePortfolio();

  useEffect(() => {
    trackPageView('internships');
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading internships..." />
      </div>
    );
  }

  const internships = portfolioData?.internships || [];

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
            Internships
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional experience and industry exposure
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card key={index} delay={index * 0.2} className="hover:scale-[1.02] transition-transform">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <motion.div
                  className="flex-shrink-0 mb-6 lg:mb-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src={internship.companyLogo}
                      alt={internship.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-white mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        {internship.title}
                      </motion.h3>
                      <motion.h4
                        className="text-lg font-semibold text-purple-400 flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Building className="h-4 w-4" />
                        <span>{internship.company}</span>
                      </motion.h4>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end space-y-1 text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{internship.location}</span>
                      </div>
                      <span className="bg-green-600/20 border border-green-400/30 rounded-full px-2 py-1 text-green-300 text-xs">
                        {internship.type}
                      </span>
                    </div>
                  </div>
                  
                  <motion.p
                    className="text-gray-300 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {internship.description}
                  </motion.p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((responsibility, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-gray-300 flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-gray-300 flex items-start"
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="text-sm font-semibold text-white mb-2">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="bg-blue-600/20 border border-blue-400/30 rounded-full px-3 py-1 text-sm font-medium text-blue-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card delay={0.8}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Internship Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Companies', value: internships.length, color: 'text-purple-400' },
                { label: 'Months', value: '8+', color: 'text-blue-400' },
                { label: 'Projects', value: '4+', color: 'text-green-400' },
                { label: 'Technologies', value: '10+', color: 'text-yellow-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Internships;