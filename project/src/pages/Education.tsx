import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Card from '../components/Card';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
      institution: 'Sasi Institute Of Technology & Engineering, Tadepalligudem',
      duration: '2022 - 2026',
      location: 'Andhra Pradesh, India',
      cgpa: '8.2/10.0',
      description: 'Specialized in Artificial Intelligence & Machine Learning. Completed coursework in algorithms, database systems, machine learning, and software development.',
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Sasi Junior College, Tanuku',
      duration: '2020 - 2022',
      location: 'Andhra Pradesh, India',
      cgpa: '90.3%',
      description: 'Science stream with Mathematics, Physics and Chemistry. Achieved excellent grades in all subjects.',
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'Roots School Of Essential Faculties, Tanuku',
      duration: '2017 - 2020',
      location: 'Andhra Pradesh, India',
      cgpa: '97%',
      description: 'Completed with distinction in all subjects. Active participant in various academic and extracurricular activities.',
    }
  ];

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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="hover:scale-[1.02] transition-transform">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-purple-600/20 border border-purple-400/30 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 md:mb-0">
                      {edu.degree}
                    </h3>
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
                  
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">
                    {edu.institution}
                  </h4>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-green-600/20 border border-green-400/30 rounded-full px-3 py-1 text-sm font-medium text-green-300">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                  
                  <p className="text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <h3 className="text-2xl font-bold text-white mb-6">Relevant Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="bg-blue-600/20 border border-blue-400/30 rounded-lg px-3 py-2 text-center text-sm font-medium text-blue-300 hover:bg-blue-600/30 transition-colors"
              >
                {course}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Education;