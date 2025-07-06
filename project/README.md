# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript for the frontend and React, Node.js, MongoDB for the backend.

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation

### Backend
- **React** - Component-based architecture (for future enhancements)
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage

### Additional Tools
- **Font Awesome** - Icon library
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── index.html          # Main HTML file
│   ├── styles/
│   │   ├── main.css        # Main styles
│   │   ├── components.css  # Component-specific styles
│   │   └── responsive.css  # Responsive design styles
│   └── js/
│       ├── data.js         # Portfolio data
│       ├── components.js   # Component rendering functions
│       └── main.js         # Main JavaScript functionality
├── server/
│   └── server.js           # Express server
├── public/
│   └── profil_img.jpg      # Profile image
├── package.json            # Dependencies and scripts
├── .env.example           # Environment variables template
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system or use MongoDB Atlas.

5. **Run the application**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to `http://localhost:3000`

## 📱 Features

### Frontend Features
- **Responsive Design** - Works on all device sizes
- **Single Page Application** - Smooth navigation without page reloads
- **Interactive Components** - Dynamic filtering and animations
- **Modern UI/UX** - Glass morphism effects and smooth transitions
- **Accessibility** - Keyboard navigation and screen reader support

### Backend Features
- **RESTful API** - Clean API endpoints for data management
- **Contact Form** - Message submission with database storage
- **Analytics Tracking** - Page visit tracking and statistics
- **Error Handling** - Comprehensive error management
- **Data Validation** - Input validation and sanitization

### Sections
- **Home** - Hero section with introduction and quick stats
- **About** - Personal information, skills, and interests
- **Education** - Academic background and coursework
- **Projects** - Technical projects with filtering
- **Internships** - Professional experience details
- **Achievements** - Awards and recognitions
- **Certificates** - Professional certifications

## 🔧 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)

### Analytics
- `POST /api/analytics` - Track page visits
- `GET /api/analytics` - Get analytics data

### Portfolio
- `GET /api/portfolio` - Get portfolio data
- `GET /api/health` - Health check

## 🎨 Customization

### Adding New Projects
Edit `src/js/data.js` and add new project objects to the `projects` array:

```javascript
{
    title: 'Your Project',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    category: 'Web Development',
    date: 'Month Year',
    github: 'https://github.com/...',
    live: 'https://...',
    image: 'https://...'
}
```

### Modifying Styles
- **Main styles**: Edit `src/styles/main.css`
- **Component styles**: Edit `src/styles/components.css`
- **Responsive styles**: Edit `src/styles/responsive.css`

### Adding New Sections
1. Add HTML structure in `src/index.html`
2. Add styles in appropriate CSS files
3. Add data in `src/js/data.js`
4. Add rendering function in `src/js/components.js`
5. Update navigation in `src/js/main.js`

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### Backend Deployment
The backend can be deployed to:
- Heroku
- Railway
- DigitalOcean
- AWS EC2

### Database
Use MongoDB Atlas for cloud database hosting.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **Bundle Size**: Optimized for fast loading
- **Mobile Responsive**: 100% mobile-friendly

## 🔒 Security

- Input validation and sanitization
- CORS configuration
- Environment variable protection
- Error handling without information leakage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Reddy Dinesh Venkata Krishna**
- Email: reddy.venkatakrishna@sasi.ac.in
- GitHub: [@Dineshchow0405](https://github.com/Dineshchow0405)
- LinkedIn: [reddy-dinesh-venkata-krishna](https://www.linkedin.com/in/reddy-dinesh-venkata-krishna-b15758280)

## 🙏 Acknowledgments

- Font Awesome for icons
- Pexels for stock images
- MongoDB for database solutions
- Express.js community for excellent documentation