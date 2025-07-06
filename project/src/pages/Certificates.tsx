import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Building } from 'lucide-react';
import Card from '../components/Card';

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      validUntil: 'March 2027',
      credentialId: 'AWS-SA-2024-001',
      description: 'Comprehensive certification covering AWS cloud architecture, security, and best practices.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      verifyUrl: 'https://aws.amazon.com/verification',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Cloud Computing'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'February 2024',
      validUntil: 'February 2026',
      credentialId: 'GCP-DEV-2024-002',
      description: 'Professional-level certification for developing scalable and reliable applications on Google Cloud Platform.',
      skills: ['GCP Services', 'Application Development', 'DevOps', 'Monitoring'],
      verifyUrl: 'https://cloud.google.com/certification/verify',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Cloud Computing'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'January 2024',
      validUntil: 'Lifetime',
      credentialId: 'COURSERA-ML-2024-003',
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and deep learning.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
      verifyUrl: 'https://coursera.org/verify',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Advanced',
      category: 'Machine Learning'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'December 2023',
      validUntil: 'December 2026',
      credentialId: 'CKA-2023-004',
      description: 'Hands-on certification demonstrating skills in Kubernetes administration and cluster management.',
      skills: ['Kubernetes', 'Container Orchestration', 'Docker', 'DevOps'],
      verifyUrl: 'https://cncf.io/certification/verify',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'DevOps'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'November 2023',
      validUntil: 'November 2025',
      credentialId: 'META-REACT-2023-005',
      description: 'Professional certification covering React fundamentals, advanced patterns, and ecosystem tools.',
      skills: ['React', 'JavaScript', 'Redux', 'Testing'],
      verifyUrl: 'https://developers.facebook.com/certification/verify',
      logo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Frontend Development'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'October 2023',
      validUntil: 'October 2026',
      credentialId: 'MONGODB-DEV-2023-006',
      description: 'Certification demonstrating proficiency in MongoDB database design, development, and optimization.',
      skills: ['MongoDB', 'Database Design', 'Aggregation', 'Indexing'],
      verifyUrl: 'https://university.mongodb.com/certification/verify',
      logo: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Database'
    },
    {
      title: 'Certified Ethical Hacker',
      issuer: 'EC-Council',
      date: 'September 2023',
      validUntil: 'September 2026',
      credentialId: 'CEH-2023-007',
      description: 'Comprehensive certification covering ethical hacking methodologies and cybersecurity practices.',
      skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Cryptography'],
      verifyUrl: 'https://eccouncil.org/verify',
      logo: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Cybersecurity'
    },
    {
      title: 'Python for Data Science Specialization',
      issuer: 'IBM (Coursera)',
      date: 'August 2023',
      validUntil: 'Lifetime',
      credentialId: 'IBM-PYTHON-2023-008',
      description: 'Comprehensive specialization covering Python programming for data science and analytics.',
      skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy', 'Matplotlib'],
      verifyUrl: 'https://coursera.org/verify',
      logo: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Intermediate',
      category: 'Data Science'
    },
    {
      title: 'Scrum Master Certification',
      issuer: 'Scrum Alliance',
      date: 'July 2023',
      validUntil: 'July 2025',
      credentialId: 'CSM-2023-009',
      description: 'Certification demonstrating knowledge of Scrum framework and agile project management.',
      skills: ['Scrum', 'Agile Methodology', 'Team Leadership', 'Project Management'],
      verifyUrl: 'https://scrumalliance.org/verify',
      logo: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Project Management'
    },
    {
      title: 'Digital Marketing Certified Professional',
      issuer: 'Google',
      date: 'June 2023',
      validUntil: 'June 2024',
      credentialId: 'GOOGLE-DM-2023-010',
      description: 'Comprehensive certification covering digital marketing strategies and analytics.',
      skills: ['SEO', 'SEM', 'Social Media Marketing', 'Analytics'],
      verifyUrl: 'https://skillshop.withgoogle.com/verify',
      logo: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Digital Marketing'
    },
    {
      title: 'Full Stack Web Development Bootcamp',
      issuer: 'The Odin Project',
      date: 'May 2023',
      validUntil: 'Lifetime',
      credentialId: 'TOP-FULLSTACK-2023-011',
      description: 'Intensive bootcamp covering full-stack web development with modern technologies.',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'Database Design'],
      verifyUrl: 'https://theodinproject.com/verify',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Advanced',
      category: 'Full Stack Development'
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Adobe',
      date: 'April 2023',
      validUntil: 'Lifetime',
      credentialId: 'ADOBE-UIUX-2023-012',
      description: 'Fundamental certification covering user interface and user experience design principles.',
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Adobe Creative Suite'],
      verifyUrl: 'https://adobe.com/verify',
      logo: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Intermediate',
      category: 'Design'
    }
  ];

  const categories = ['All', 'Cloud Computing', 'Machine Learning', 'DevOps', 'Frontend Development', 'Database', 'Cybersecurity', 'Data Science', 'Project Management', 'Digital Marketing', 'Full Stack Development', 'Design'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional': return 'text-purple-300 bg-purple-600/20 border-purple-400/30';
      case 'Advanced': return 'text-blue-300 bg-blue-600/20 border-blue-400/30';
      case 'Intermediate': return 'text-green-300 bg-green-600/20 border-green-400/30';
      default: return 'text-gray-300 bg-gray-600/20 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and completed courses
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer}
                    className="w-full h-full object-cover"
                  />
                </div>
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
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
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
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-xs text-gray-400">Verified</span>
                </div>
                <a
                  href={cert.verifyUrl}
                  className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Verify</span>
                </a>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-xs text-gray-400">
                  Credential ID: {cert.credentialId}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Certification Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-gray-300">Total Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-gray-300">Professional Level</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">7</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">2025</div>
                <div className="text-gray-300">Latest Year</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;