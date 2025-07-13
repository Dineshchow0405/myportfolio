import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

const About = () => {
  const { portfolioData, loading, trackPageView } = usePortfolio();

  useEffect(() => {
    trackPageView('about');
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading about information..." />
      </div>
    );
  }

  const personal = portfolioData?.personal;
  const skills = portfolioData?.skills || [];

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
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my background, skills, and what drives me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="text-center sticky top-24">
              <motion.div
                className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-white/5 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={personal?.profileImage || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={personal?.name}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              <h2 className="text-2xl font-bold text-white mb-2">{personal?.name}</h2>
              <p className="text-purple-400 mb-4">{personal?.title}</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">{personal?.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">{personal?.age} years old</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">{personal?.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">{personal?.phone}</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <motion.a 
                  href={personal?.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href={personal?.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </div>
            </Card>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card delay={0.2}>
              <h3 className="text-2xl font-bold text-white mb-4">About</h3>
              <div className="space-y-4 text-gray-300">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  I'm a passionate B.Tech Artificial Intelligence & Machine Learning graduate with a strong foundation in software development and problem-solving. My journey began with curiosity about how technology works and has evolved into a deep passion for creating innovative solutions that make a difference.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Throughout my academic journey, I've worked on various projects ranging from 
                  web applications to machine learning models. I believe in writing clean, 
                  efficient code and staying up-to-date with the latest technologies and best practices.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or learning about emerging trends in artificial intelligence 
                  and cloud computing.
                </motion.p>
              </div>
            </Card>

            <Card delay={0.4}>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-purple-600/20 border border-purple-400/30 rounded-lg px-3 py-2 text-center text-sm font-medium text-purple-300 hover:bg-purple-600/30 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card delay={0.6}>
              <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
              <div className="space-y-4 text-gray-300">
                {[
                  {
                    title: 'Technology & Innovation',
                    description: 'Exploring cutting-edge technologies and their applications',
                    color: 'bg-purple-400'
                  },
                  {
                    title: 'Open Source',
                    description: 'Contributing to open-source projects and communities',
                    color: 'bg-blue-400'
                  },
                  {
                    title: 'Continuous Learning',
                    description: 'Always learning new skills and staying updated with industry trends',
                    color: 'bg-green-400'
                  }
                ].map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-2 h-2 ${interest.color} rounded-full mt-2`}></div>
                    <div>
                      <h4 className="font-semibold text-white">{interest.title}</h4>
                      <p className="text-sm">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;