import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const { portfolioData, loading, trackPageView } = usePortfolio();

  useEffect(() => {
    trackPageView('home');
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading portfolio..." />
      </div>
    );
  }

  const features = [
    {
      icon: <Code className="h-8 w-8 text-purple-400" />,
      title: 'Projects',
      description: 'Explore my technical projects and innovations',
      link: '/projects',
      count: portfolioData?.stats?.projects || 0
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-400" />,
      title: 'Internships',
      description: 'Professional experience and industry exposure',
      link: '/internships',
      count: portfolioData?.stats?.internships || 0
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-yellow-400" />,
      title: 'Education',
      description: 'Academic background and qualifications',
      link: '/education',
      count: '3 Levels'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Certificates',
      description: 'Professional certifications and courses',
      link: '/certificates',
      count: portfolioData?.stats?.certificates || 0
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-white/5 backdrop-blur-sm animate-float">
                <img 
                  src={portfolioData?.personal?.profileImage || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={portfolioData?.personal?.name || 'Profile'}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {portfolioData?.personal?.name?.split(' ').slice(0, 1).join(' ')}{' '}
              <span className="gradient-text">
                {portfolioData?.personal?.name?.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {portfolioData?.personal?.title} | Full Stack Developer | Problem Solver
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Passionate about creating innovative solutions and building impactful technology. 
              Experienced in modern web development, machine learning, and software engineering.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center"
              >
                About Me
              </Link>
              <a
                href={portfolioData?.personal?.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore My Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover my academic achievements, professional experiences, and technical expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="block">
                <Card 
                  className="text-center h-full group cursor-pointer"
                  delay={index * 0.1}
                >
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-2xl font-bold text-purple-400">
                    {feature.count}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-max">
          <Card className="text-center">
            <motion.h3
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Portfolio Statistics
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Projects', value: portfolioData?.stats?.projects || 0, color: 'text-purple-400' },
                { label: 'Internships', value: portfolioData?.stats?.internships || 0, color: 'text-blue-400' },
                { label: 'Certificates', value: portfolioData?.stats?.certificates || 0, color: 'text-green-400' },
                { label: 'Years Learning', value: portfolioData?.stats?.yearsLearning || 0, color: 'text-yellow-400' }
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
                    className={`text-4xl font-bold ${stat.color} mb-2`}
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
      </section>
    </div>
  );
};

export default Home;