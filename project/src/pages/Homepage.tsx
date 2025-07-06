import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import Card from '../components/Card';

const Homepage = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-purple-400" />,
      title: 'Projects',
      description: 'Explore my technical projects and innovations',
      link: '/projects'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-400" />,
      title: 'Internships',
      description: 'Professional experience and industry exposure',
      link: '/internships'
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-yellow-400" />,
      title: 'Education',
      description: 'Academic background and qualifications',
      link: '/education'
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: 'Certificates',
      description: 'Professional certifications and courses',
      link: '/certificates'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-white/5 backdrop-blur-sm">
                <img 
                  src="/new-profile.jpg" 
                  alt="Reddy Dinesh Venkata Krishna"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Reddy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Dinesh Venkata Krishna</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              B.Tech Artificial Intelligence & Machine Learning Graduate | Full Stack Developer | Problem Solver
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building impactful technology. 
              Experienced in modern web development, machine learning, and software engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore My Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover my academic achievements, professional experiences, and technical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="block">
                <Card className="text-center h-full hover:scale-105 transition-transform">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-gray-300">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">12</div>
              <div className="text-gray-300">Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-gray-300">Years Learning</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;