import React from 'react';
import { MapPin, Calendar, Mail, Phone, Github, Linkedin } from 'lucide-react';
import Card from '../components/Card';

const About = () => {
  const skills = [
           'c', 'Python', 'Java', 'JavaScript', 'React.Js', 'Dart', 'Flutter', 'HTML', 'CSS', 'MongoDB', 'Git', 'Machine Learning'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my background, skills, and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-white/5 backdrop-blur-sm">
                <img 
                  src="https://drive.google.com/file/d/17ip7zOVooouQs2tNcqeu6MKGubWrUX0f/view?usp=sharing" 
                  alt="Dinesh Venkata Krishna Reddy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Reddy Dinesh Venkata Krishna</h2>
              <p className="text-purple-400 mb-4">B.Tech Artificial Intelligence & Machine Learning</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span>Tadepalligudem, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span>20 years old</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span>reddy.venkatakrishna@sasi.ac.in</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-purple-400" />
                  <span>+91 9052733927</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <a 
                  href="https://github.com/Dineshchow0405" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/reddy-dinesh-venkata-krishna-b15758280" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </Card>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <h3 className="text-2xl font-bold text-white mb-4">About</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate B.Tech Artificial Intelligence & Machine Learning graduate with a strong foundation in software development and problem-solving. My journey began with curiosity about how technology works and has evolved into a deep passion for creating innovative solutions that make a difference.
                </p>
                <p>
                  Throughout my academic journey, I've worked on various projects ranging from 
                  web applications to machine learning models. I believe in writing clean, 
                  efficient code and staying up-to-date with the latest technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or learning about emerging trends in artificial intelligence 
                  and cloud computing.
                </p>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-purple-600/20 border border-purple-400/30 rounded-lg px-3 py-2 text-center text-sm font-medium text-purple-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Technology & Innovation</h4>
                    <p className="text-sm">Exploring cutting-edge technologies and their applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Open Source</h4>
                    <p className="text-sm">Contributing to open-source projects and communities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Continuous Learning</h4>
                    <p className="text-sm">Always learning new skills and staying updated with industry trends</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;