import React from 'react';
import { Github, ExternalLink, Calendar, Code, Database, Smartphone } from 'lucide-react';
import Card from '../components/Card';

const Projects = () => {
  const projects = [
   {
            title: 'Attendance App',
            description: 'An app which stores the attendance log and the status of employees working days in a month also for requesting leaves in the same place.',
            technologies: ['Dart', 'Flutter', 'Json', 'Figma'],
            category: 'Android Development',
            date: 'Jun 2025',
            github: 'https://github.com/Dineshchow0405/AttendanceApp',
            image: 'https://i.pinimg.com/736x/15/a5/81/15a5815382871c82e1273fc649fcf986.jpg'
        },
        {
            title: 'My Portfolio',
            description: 'Full-stack based portfolio application with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Features include homepage, aboutMe, education, certificates, internships and projects.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
            category: 'Web Development',
            date: 'Jun 2025',
            github: 'https://github.com',
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Object Detection Using Machine Learning',
            description: 'Built a machine learning model to classify images using deep learning techniques. Achieved 95% accuracy on test dataset using CNN architecture.',
            technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'RoboFlow'],
            category: 'Machine Learning',
            date: 'May 2024',
             github: 'https://github.com',
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: 'Telegram Bot For Weather Prediction',
            description: 'An AI driven bot for predicitong weather report across cities.',
            technologies: ['Python', 'Json', 'TeleBot', 'NLP'],
            category: 'Blockchain',
            date: 'Jun 2024',                github:'https://colab.research.google.com/drive/1YkZj4I5qE6HRvWsA8kUghGuZmzpm72wK',
            image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
  ];

  const categories = ['All', 'Web Development', 'App Development', 'Machine Learning'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects and innovations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="text-purple-400">
                    {project.icon}
                  </div>
                  <span className="text-sm text-purple-400 font-medium">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{project.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
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
              
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;