import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

const Education = () => {
  const { portfolioData, loading, trackPageView } = usePortfolio();

  useEffect(() => {
    trackPageView('education');
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading education information..." />
      </div>
    );
  }

  const education = portfolioData?.education || [];
  const coursework = [
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Machine Learning',
    'Artificial Intelligence',
    'Web Development',
    'Mobile App Development',
    'Cloud Computing',
    'Deep Learning',
  ];

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
            Education
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} delay={index * 0.2} className="hover:scale-[1.02] transition-transform">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <motion.div
                  className="flex-shrink-0 mb-4 md:mb-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-purple-600/20 border border-purple-400/30 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-purple-400" />
                  </div>
                </motion.div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <motion.h3
                      className="text-xl font-bold text-white mb-2 md:mb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.h4
                    className="text-lg font-semibold text-purple-400 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {edu.institution}
                  </motion.h4>
                  
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block bg-green-600/20 border border-green-400/30 rounded-full px-3 py-1 text-sm font-medium text-green-300">
                      CGPA: {edu.cgpa}
                    </span>
                  </motion.div>
                  
                  <motion.p
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {edu.description}
                  </motion.p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card delay={0.6}>
          <h3 className="text-2xl font-bold text-white mb-6">Relevant Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {coursework.map((course, index) => (
              <motion.div
                key={index}
                className="bg-blue-600/20 border border-blue-400/30 rounded-lg px-3 py-2 text-center text-sm font-medium text-blue-300 hover:bg-blue-600/30 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                {course}
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Education;