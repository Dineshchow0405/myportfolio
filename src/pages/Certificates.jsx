import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Building, Filter } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

const Certificates = () => {
  const { portfolioData, loading, trackPageView } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    trackPageView('certificates');
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading certificates..." />
      </div>
    );
  }

  const certificates = portfolioData?.certificates || [];
  const categories = ['All', ...new Set(certificates.map(cert => cert.category))];
  
  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional': return 'text-purple-300 bg-purple-600/20 border-purple-400/30';
      case 'Advanced': return 'text-blue-300 bg-blue-600/20 border-blue-400/30';
      case 'Intermediate': return 'text-green-300 bg-green-600/20 border-green-400/30';
      default: return 'text-gray-300 bg-gray-600/20 border-gray-400/30';
    }
  };

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
            Certificates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and completed courses
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

        {/* Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Building className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-400 font-medium text-sm">{cert.issuer}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                    <span className="text-xs text-gray-400">
                      Valid until: {cert.validUntil}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-600/20 border border-blue-400/30 rounded-full px-2 py-1 text-xs font-medium text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs text-gray-400 py-1">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-xs text-gray-400">Verified</span>
                    </div>
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Verify</span>
                    </motion.a>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-400">
                      Credential ID: {cert.credentialId}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCertificates.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">
              No certificates found in the "{selectedCategory}" category.
            </p>
          </motion.div>
        )}

        {/* Summary Stats */}
        <div className="mt-16">
          <Card delay={0.8}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Certification Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Total Certificates', value: certificates.length, color: 'text-purple-400' },
                { label: 'Professional Level', value: certificates.filter(c => c.level === 'Professional').length, color: 'text-blue-400' },
                { label: 'Categories', value: categories.length - 1, color: 'text-green-400' },
                { label: 'Latest Year', value: '2025', color: 'text-yellow-400' }
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

export default Certificates;