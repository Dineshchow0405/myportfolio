import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import Card from '../components/Card';

const Internships = () => {
  const internships = [
     {
            title: 'Flutter Developer Intern',
            company: 'Pramukesh And Co',
            location: 'Velpuru, Andhra Pradesh',
            duration: 'May 2025 - Jul 2023',
            type: 'Full-time',
            description: 'As a Flutter Developer Intern at Pramukesh and Co, I was responsible for building cross-platform mobile applications using Flutter and Dart. During the internship, I gained hands-on experience in UI/UX design, Firebase integration, and backend communication. I concluded the internship by developing a production-level Attendance Management App, inspired by apps like PagarBook, designed to simplify employee attendance tracking and management for small businesses.',
            responsibilities: [
                'Developed responsive and reusable UI components using Flutter and Dart.',
                'Built features such as user registration, daily check-in/check-out, and monthly attendance reports.',
                'Conducted app testing and debugging across Android devices to ensure performance and reliability.',
                'Collaborated with mentors and team members via Git and version control systems.'
            ],
            technologies: ['Flutter', 'Dart', 'MaterialApp', 'Figma', 'VS Code'],
            achievements: [
                'Developed a full-featured attendance management app using Flutter and Firebase from scratch.',
                'Implemented real-time data syncing and offline support to enhance user experience.',
                'Reduced manual attendance tracking efforts by automating check-in/out and report generation.'
            ],
            companyLogo: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
            title: 'AI Intern',
            company: 'AIMERS Socity',
            location: 'Remote',
            duration: 'May 2024 - Jul 2024',
            type: 'Part-time',
            description: 'Worked on various AI tools for predictive analytics(Power BI) and data visualization(Object Detection). Analyzed large datasets for predictive weather forecasting.',
            responsibilities: [
                'Developed machine learning models for Object Detection',
                'Created data visualizations using Python and Tableau',
                'Performed statistical analysis on large datasets',
                'Made analytics on weather forecasting using bot'
            ],
            technologies: ['Python', 'Pandas', 'Json', 'NLP', 'Yolo'],
            achievements: [
                'Improved model accuracy by 25% through feature engineering',
                'Created automated weather reporting system saving 20 hours'],
            companyLogo: 'https://media.licdn.com/dms/image/v2/C560BAQHuJJtpXYm6Nw/company-logo_200_200/company-logo_200_200/0/1634191812277?e=2147483647&v=beta&t=4CpLbMCf8eJuAy9R_D0oSxk9Emv7yRwwK2rsu3TQyDA'
        },
        {
            title: 'AIML Intern',
            company: 'LearnWik Solutions Pvt Ltd',
            location: 'Bengaluru, India',
            duration: 'Apr 2023 - Jun 2023',
            type: 'Part-time',
            description: 'Developed and implementation of AI-Based Facial Recognition system.',
            responsibilities: [
                'Identified use cases and technical requirements for the facial recognition system.',
                'Designed architecture integrating camera hardware, preprocessing modules, and recognition pipelines.',
                'Trained and fine-tuned models using frameworks like TensorFlow, PyTorch, or OpenCV.'
            ],
            technologies: ['Deep Learning', 'Python', 'CNN', 'RoboFlow', 'Git'],
            achievements: [
                'Achieved 98.7% face recognition accuracy across diverse demographics using a custom-trained deep learning model optimized with transfer learning and data augmentation techniques.',
                'Reduced face detection and verification time by 40% by implementing real-time inference with model quantization and GPU acceleration, enabling smooth performance on edge devices.',
                'Successfully deployed the system for secure access control in a live environment, managing over 5,000 user profiles.'
            ],
            companyLogo: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg'
        }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Internships
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional experience and industry exposure
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card key={index} className="hover:scale-[1.02] transition-transform">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src={internship.companyLogo} 
                      alt={internship.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {internship.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-purple-400">
                        {internship.company}
                      </h4>
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
                  
                  <p className="text-gray-300 mb-6">
                    {internship.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-600/20 border border-blue-400/30 rounded-full px-3 py-1 text-sm font-medium text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Internship Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-gray-300">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
                <div className="text-gray-300">Months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">4</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">7</div>
                <div className="text-gray-300">Technologies</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Internships;