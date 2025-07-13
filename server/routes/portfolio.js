import express from 'express';

const router = express.Router();

// Portfolio data
const portfolioData = {
  personal: {
    name: 'Reddy Dinesh Venkata Krishna',
    title: 'B.Tech Artificial Intelligence & Machine Learning Graduate',
    email: 'reddy.venkatakrishna@sasi.ac.in',
    phone: '+91 9052733927',
    location: 'Tadepalligudem, Andhra Pradesh, India',
    age: 20,
    github: 'https://github.com/Dineshchow0405',
    linkedin: 'https://www.linkedin.com/in/reddy-dinesh-venkata-krishna-b15758280',
    resume: 'https://drive.google.com/file/d/18ElCHKDZBevzj-c1ojAw8F881O-pdgZ4/view?usp=sharing',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  
  skills: [
    'C', 'Python', 'Java', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Dart', 'Flutter', 'HTML', 'CSS', 'Git', 'Machine Learning',
    'TensorFlow', 'OpenCV', 'AWS', 'Docker'
  ],

  education: [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
      institution: 'Sasi Institute Of Technology & Engineering, Tadepalligudem',
      duration: '2022 - 2026',
      location: 'Andhra Pradesh, India',
      cgpa: '8.2/10.0',
      description: 'Specialized in Artificial Intelligence & Machine Learning. Completed coursework in algorithms, database systems, machine learning, and software development.'
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Sasi Junior College, Tanuku',
      duration: '2020 - 2022',
      location: 'Andhra Pradesh, India',
      cgpa: '90.3%',
      description: 'Science stream with Mathematics, Physics and Chemistry. Achieved excellent grades in all subjects.'
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'Roots School Of Essential Faculties, Tanuku',
      duration: '2017 - 2020',
      location: 'Andhra Pradesh, India',
      cgpa: '97%',
      description: 'Completed with distinction in all subjects. Active participant in various academic and extracurricular activities.'
    }
  ],

  projects: [
    {
      title: 'Attendance App',
      description: 'An app which stores the attendance log and the status of employees working days in a month also for requesting leaves in the same place.',
      technologies: ['Dart', 'Flutter', 'JSON', 'Figma'],
      category: 'Mobile Development',
      date: 'Jun 2025',
      github: 'https://github.com/Dineshchow0405/AttendanceApp',
      live: '#',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'MERN Portfolio',
      description: 'Full-stack portfolio application built with MongoDB, Express.js, React, and Node.js. Features include responsive design, contact form, and analytics.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      category: 'Web Development',
      date: 'Jan 2025',
      github: 'https://github.com',
      live: '#',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Object Detection Using Machine Learning',
      description: 'Built a machine learning model to classify images using deep learning techniques. Achieved 95% accuracy on test dataset using CNN architecture.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'RoboFlow'],
      category: 'Machine Learning',
      date: 'May 2024',
      github: 'https://github.com',
      live: '#',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Telegram Bot For Weather Prediction',
      description: 'An AI driven bot for predicting weather report across cities using natural language processing.',
      technologies: ['Python', 'JSON', 'TeleBot', 'NLP'],
      category: 'AI/ML',
      date: 'Jun 2024',
      github: 'https://colab.research.google.com/drive/1YkZj4I5qE6HRvWsA8kUghGuZmzpm72wK',
      live: '#',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ],

  internships: [
    {
      title: 'Flutter Developer Intern',
      company: 'Pramukesh And Co',
      location: 'Velpuru, Andhra Pradesh',
      duration: 'May 2025 - Jul 2025',
      type: 'Full-time',
      description: 'Developed cross-platform mobile applications using Flutter and Dart. Gained hands-on experience in UI/UX design, Firebase integration, and backend communication.',
      responsibilities: [
        'Developed responsive and reusable UI components using Flutter and Dart',
        'Built features such as user registration, daily check-in/check-out, and monthly attendance reports',
        'Conducted app testing and debugging across Android devices',
        'Collaborated with mentors and team members via Git and version control systems'
      ],
      technologies: ['Flutter', 'Dart', 'MaterialApp', 'Figma', 'VS Code'],
      achievements: [
        'Developed a full-featured attendance management app from scratch',
        'Implemented real-time data syncing and offline support',
        'Reduced manual attendance tracking efforts by automating processes'
      ],
      companyLogo: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'AI Intern',
      company: 'AIMERS Society',
      location: 'Remote',
      duration: 'May 2024 - Jul 2024',
      type: 'Part-time',
      description: 'Worked on various AI tools for predictive analytics and data visualization. Analyzed large datasets for predictive weather forecasting.',
      responsibilities: [
        'Developed machine learning models for Object Detection',
        'Created data visualizations using Python and Tableau',
        'Performed statistical analysis on large datasets',
        'Made analytics on weather forecasting using bot'
      ],
      technologies: ['Python', 'Pandas', 'JSON', 'NLP', 'YOLO'],
      achievements: [
        'Improved model accuracy by 25% through feature engineering',
        'Created automated weather reporting system saving 20 hours'
      ],
      companyLogo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'AIML Intern',
      company: 'LearnWik Solutions Pvt Ltd',
      location: 'Bengaluru, India',
      duration: 'Apr 2023 - Jun 2023',
      type: 'Part-time',
      description: 'Developed and implemented AI-Based Facial Recognition system with high accuracy and real-time performance.',
      responsibilities: [
        'Identified use cases and technical requirements for facial recognition system',
        'Designed architecture integrating camera hardware and recognition pipelines',
        'Trained and fine-tuned models using TensorFlow and OpenCV'
      ],
      technologies: ['Deep Learning', 'Python', 'CNN', 'RoboFlow', 'Git'],
      achievements: [
        'Achieved 98.7% face recognition accuracy across diverse demographics',
        'Reduced face detection time by 40% through optimization',
        'Successfully deployed system managing over 5,000 user profiles'
      ],
      companyLogo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ],

  certificates: [
    {
      title: 'AWS Cloud Foundation',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024',
      validUntil: 'Lifetime',
      credentialId: 'AWS-CLOUD-2024-013',
      description: 'Comprehensive certification covering AWS cloud foundations.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      verifyUrl: 'https://drive.google.com/file/d/1WZb_ashfD29Hd-TsgSoOylV7HLBvVN0U/view?usp=sharing',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Advanced',
      category: 'Cloud Computing'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Amazon Web Services',
      date: 'Feb 2024',
      validUntil: 'Lifetime',
      credentialId: 'AWS-ML-2024-004',
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and deep learning.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
      verifyUrl: 'https://drive.google.com/file/d/14BberOficuwPK8BG-s2GOYgXxOpss8O3/view?usp=drive_link',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Intermediate',
      category: 'Machine Learning'
    },
    {
      title: 'Flutter Development Workshop',
      issuer: 'Digitalex Solutions',
      date: 'Mar 2025',
      validUntil: 'Lifetime',
      credentialId: 'DIGITALEX-FLUTTER-2025-012',
      description: 'Comprehensive certification covering Flutter development and UI/UX design.',
      skills: ['Flutter', 'Dart', 'UI/UX Design', 'JSON'],
      verifyUrl: 'https://drive.google.com/file/d/1x2zM-w7ocg5dnHMQh5SJPQCGN765fQOg/view?usp=sharing',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Mobile Development'
    }
  ],

  stats: {
    projects: 4,
    internships: 3,
    certificates: 12,
    yearsLearning: 3
  }
};

// Get all portfolio data
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: portfolioData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching portfolio data',
      error: error.message
    });
  }
});

// Get specific section
router.get('/:section', (req, res) => {
  try {
    const { section } = req.params;
    
    if (portfolioData[section]) {
      res.json({
        success: true,
        data: portfolioData[section]
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Section not found'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching section data',
      error: error.message
    });
  }
});

export default router;