import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Dineshchow0405',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/reddy-dinesh-venkata-krishna-b15758280',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'Resume', url: 'https://drive.google.com/file/d/18ElCHKDZBevzj-c1ojAw8F881O-pdgZ4/view?usp=sharing' },
    { name: 'Portfolio', url: '#' }
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Reddy Dinesh Venkata Krishna
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              B.Tech AIML Graduate passionate about creating innovative solutions 
              through technology. Specializing in Full Stack Development, Machine Learning, 
              and Software Engineering.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-sm">reddy.venkatakrishna@sasi.ac.in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-sm">+91 9052733927</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Reddy Dinesh Venkata Krishna. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React, Node.js, Express & MongoDB
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;