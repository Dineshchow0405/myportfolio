// Portfolio Data
const portfolioData = {
    // Skills data
    skills: [
        'C', 'Python', 'Java', 'JavaScript', 'React.js', 'Dart', 'Flutter', 
        'HTML', 'CSS', 'MongoDB', 'Git', 'Machine Learning'
    ],

    // Education data
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

    // Coursework data
    coursework: [
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
        'Deep Learning'
    ],

    // Projects data
    projects: [
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
    ],

    // Internships data
    internships: [
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
    ],

    // Certificates data
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
            title: 'AI For Students',
            issuer: 'Next Wave',
            date: 'Jly 2024',
            validUntil: 'LifeTime',
            credentialId: 'NXT-AI-2024-002',
            description: 'Begineer-level certification for developing Generative AI model applications on Using Prolog.',
            skills: ['Prolog', 'Scripting', 'Prompting', 'NLP'],
            verifyUrl: 'https://drive.google.com/file/d/1m9PqGByB3r-IaEuOeHqSw3lUMQ00fUeb/view?usp=sharing',
            logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100',
            level: 'Advanced',
            category: 'AIML'
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
            title: 'AI-ML Virtual Internship',
            issuer: 'EduSkills',
            date: 'Mar 2023',
            validUntil: 'LifeTime',
            credentialId: '9b45379641154fd475fa01ad1bd01b30',
            description: 'AIML Virtual Internship in the under of EduSkills was done with the help of AWS in learning through AI models.',
            skills: ['Machine Learning', 'CNN', 'NLP', 'Python'],
            verifyUrl: 'https://drive.google.com/file/d/1h2EjDVa-9mLNJUwlnM0sW3477DbtOYRX/view?usp=sharing',
            logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100',
            level: 'Professional',
            category: 'AIML'
        },
        {
            title: 'AWS Academy Data Engineering',
            issuer: 'AWS Academy',
            date: 'Feb 2024',
            validUntil: 'LifeTime',
            credentialId: 'AWS-DATA-2024-005',
            description: 'A Begineer level Data Engineering Workshop in the under of AWS Academy.',
            skills: ['DataStorage', 'DataProcessing', 'WareHousing', 'DatStreaming'],
            verifyUrl: 'https://drive.google.com/file/d/1Xdd1FcsSc3HulfdRbhi-F1834CRizYUF/view?usp=sharing',
            logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
            level: 'Intermediate',
            category: 'Data Engineering'
        },
        {
            title: 'Artificial Intelligence',
            issuer: 'LearnWik Solutions Pvt. Ltd.',
            date: 'Jun 2023',
            validUntil: 'LifeTime',
            credentialId: 'LW01052',
            description: '.',
            skills: ['AI', 'Python', 'Prolog', 'ML'],
            verifyUrl: 'https://drive.google.com/file/d/1vvNaZ2pcxvKPg9WBDLI34rOjXKDmQHOB/view?usp=sharing',
            logo: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg',
            level: 'Intermediate',
            category: 'AIML'
        },
        {
            title: 'Ethical Hacking & Cyber Security Workshop',
            issuer: 'Supraja Technologies',
            date: 'Oct 2024',
            validUntil: 'LifeTime',
            credentialId: 'CEH-SUP-2024-007',
            description: 'Comprehensive certification covering ethical hacking methodologies and cybersecurity practices.',
            skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Cryptography'],
            verifyUrl: 'https://drive.google.com/file/d/1V0xDZEKGYkYUF1qcOeGN1ZVDYS_LZm7e/view?usp=sharing',
            logo: 'https://media.licdn.com/dms/image/v2/C560BAQF3H-o_kgtM7g/company-logo_200_200/company-logo_200_200/0/1630672249915?e=2147483647&v=beta&t=O_tM7qJTo1wQBSfxTiFk8ILQTvcwydLHgXhAuNuDT7A',
            level: 'Intermediate',
            category: 'Cybersecurity'
        },
        {
            title: 'AI Internship',
            issuer: 'LearnWik Solutions Pvt. Ltd.',
            date: 'Jun 2023',
            validUntil: 'Lifetime',
            credentialId: 'LW01052',
            description: 'An Internship done on AI under LearnWik Solutions during the period of April to June.',
            skills: ['AI', 'Prolog', 'Python', 'NumPy', 'Matplotlib'],
            verifyUrl: 'https://drive.google.com/file/d/1N0ngASScoKlsG1O0gOcAolsy7aXgLkvc/view?usp=sharing',
            logo: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg',
            level: 'Intermediate',
            category: 'AIML'
        },
        {
            title: 'Flutter Developer Intern',
            issuer: 'Pramukesh & Co',
            date: 'Jul 2025',
            validUntil: 'LifeTime',
            credentialId: 'FLT-DART-2025-009',
            description: 'Development of android app using Flutter and dart technologies during May-July.',
            skills: ['Dart', 'Flutter', 'UI/UX Design', 'Project Management'],
            verifyUrl: 'https://scrumalliance.org/verify',
            logo: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=100',
            level: 'Professional',
            category: 'Flutter'
        },
        {
            title: 'National Voluntary Blood Donation',
            issuer: 'Government Blood Bank',
            date: 'Oct 2024',
            validUntil: 'LifeTime',
            credentialId: '54/WG/AP/1997/BB/R',
            description: 'A Blood Donation camp was held in our college, As a active social responcible person I have donated my blood for the needy people.',
            skills: ['Volunteerism', 'Health Awareness', 'Social Media', 'Interpersonal Skills'],
            verifyUrl: 'https://drive.google.com/file/d/11jQwW1bOgeDHZA3IRkCmSt5JFTa7DFiG/view?usp=sharing',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOXskexb5TbSMhRHOawU4wyGUxmvPpHpaNA&s',
            level: 'Intermediate',
            category: 'Social'
        },
        {
            title: 'Full Stack Web Development Bootcamp',
            issuer: 'SITE ACM Student Chapter',
            date: 'Mar 2024',
            validUntil: 'Lifetime',
            credentialId: 'SITE-ACM-2024-011',
            description: 'Intensive bootcamp covering full-stack web development with modern technologies.',
            skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'Database Design'],
            verifyUrl: 'https://drive.google.com/file/d/1wa0sGONH84cmLHxPdeoqj_MOtRsyTCTf/view?usp=sharing',
            logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
            level: 'Professional',
            category: 'Full Stack Development'
        },
        {
            title: 'Flutter Development Workshop',
            issuer: 'Digitalex Solutions',
            date: 'Mar 2025',
            validUntil: 'Lifetime',
            credentialId: 'DIGITALEX-FLUTTER-2025-012',
            description: 'Fundamental certification covering user interface and user experience on App Development.',
            skills: ['Flutter', 'Dart', 'UI/UX Design', 'Json'],
            verifyUrl: 'https://drive.google.com/file/d/1x2zM-w7ocg5dnHMQh5SJPQCGN765fQOg/view?usp=sharing',
            logo: 'https://media.licdn.com/dms/image/v2/C560BAQESeQ4fDqj5XA/company-logo_200_200/company-logo_200_200/0/1673968664563?e=2147483647&v=beta&t=c7hB_rEI5S5wxQhiB6OiNo0IGX2IROTF4cDYhRwubVw',
            level: 'Professional',
            category: 'Flutter'
        }
    ]
};

// Categories for filtering
const categories = {
    projects: ['All', 'Web Development', 'App Development', 'Machine Learning', ],
    certificates: ['All', 'Cloud Computing', 'Machine Learning', 'AIML', 'Data Engineering', 'Flutter', 'Full Stack Development', 'Social']
};

// Color mapping for different categories and levels
const colorMap = {
    yellow: { bg: 'rgba(251, 191, 36, 0.2)', border: 'rgba(251, 191, 36, 0.3)', text: '#fbbf24' },
    purple: { bg: 'rgba(168, 85, 247, 0.2)', border: 'rgba(168, 85, 247, 0.3)', text: '#c084fc' },
    blue: { bg: 'rgba(59, 130, 246, 0.2)', border: 'rgba(59, 130, 246, 0.3)', text: '#60a5fa' },
    green: { bg: 'rgba(16, 185, 129, 0.2)', border: 'rgba(16, 185, 129, 0.3)', text: '#34d399' },
    indigo: { bg: 'rgba(99, 102, 241, 0.2)', border: 'rgba(99, 102, 241, 0.3)', text: '#818cf8' },
    orange: { bg: 'rgba(249, 115, 22, 0.2)', border: 'rgba(249, 115, 22, 0.3)', text: '#fb923c' },
    pink: { bg: 'rgba(236, 72, 153, 0.2)', border: 'rgba(236, 72, 153, 0.3)', text: '#f472b6' },
    teal: { bg: 'rgba(20, 184, 166, 0.2)', border: 'rgba(20, 184, 166, 0.3)', text: '#2dd4bf' }
};

const levelColors = {
    'Professional': 'color-purple',
    'Advanced': 'color-blue',
    'Intermediate': 'color-green'
};