// Component rendering functions

// Render skills grid
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-tag">${skill}</div>
    `).join('');
}

// Render education timeline
function renderEducation() {
    const educationTimeline = document.getElementById('educationTimeline');
    if (!educationTimeline) return;

    educationTimeline.innerHTML = portfolioData.education.map(edu => `
        <div class="education-item">
            <div class="education-header">
                <div class="education-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="education-content">
                    <div class="education-title-row">
                        <div>
                            <h3 class="education-degree">${edu.degree}</h3>
                            <h4 class="education-institution">${edu.institution}</h4>
                        </div>
                        <div class="education-meta">
                            <div class="education-meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>${edu.duration}</span>
                            </div>
                            <div class="education-meta-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${edu.location}</span>
                            </div>
                        </div>
                    </div>
                    <div class="education-cgpa">CGPA: ${edu.cgpa}</div>
                    <p class="education-description">${edu.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Render coursework grid
function renderCoursework() {
    const courseworkGrid = document.getElementById('courseworkGrid');
    if (!courseworkGrid) return;

    courseworkGrid.innerHTML = portfolioData.coursework.map(course => `
        <div class="coursework-item">${course}</div>
    `).join('');
}

// Render projects with filtering
function renderProjects(filterCategory = 'All') {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectFilters = document.getElementById('projectFilters');
    
    if (!projectsGrid || !projectFilters) return;

    // Render filter buttons
    projectFilters.innerHTML = categories.projects.map(category => `
        <button class="filter-btn ${category === filterCategory ? 'active' : ''}" 
                onclick="renderProjects('${category}')">${category}</button>
    `).join('');

    // Filter projects
    const filteredProjects = filterCategory === 'All' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(project => project.category === filterCategory);

    // Render projects
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <div class="project-header">
                    <div class="project-category">
                        <i class="fas fa-code"></i>
                        <span>${project.category}</span>
                    </div>
                    <div class="project-date">
                        <i class="fas fa-calendar"></i>
                        <span>${project.date}</span>
                    </div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link">
                        <i class="fab fa-github"></i>
                        <span>Code</span>
                    </a>
                    <a href="${project.live}" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Live</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Render internships
function renderInternships() {
    const internshipsList = document.getElementById('internshipsList');
    if (!internshipsList) return;

    internshipsList.innerHTML = portfolioData.internships.map(internship => `
        <div class="internship-card">
            <div class="internship-header">
                <div class="company-logo">
                    <img src="${internship.companyLogo}" alt="${internship.company}">
                </div>
                <div class="internship-info">
                    <div class="internship-title-row">
                        <div>
                            <h3 class="internship-title">${internship.title}</h3>
                            <h4 class="internship-company">${internship.company}</h4>
                        </div>
                        <div class="internship-meta">
                            <div class="internship-meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>${internship.duration}</span>
                            </div>
                            <div class="internship-meta-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${internship.location}</span>
                            </div>
                            <span class="internship-type">${internship.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="internship-description">${internship.description}</p>
            <div class="internship-details">
                <div class="detail-section">
                    <h5>Key Responsibilities</h5>
                    <ul class="detail-list">
                        ${internship.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
                <div class="detail-section">
                    <h5>Key Achievements</h5>
                    <ul class="detail-list">
                        ${internship.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="internship-technologies">
                <h5>Technologies Used</h5>
                <div class="tech-tags">
                    ${internship.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render certificates with filtering
function renderCertificates(filterCategory = 'All') {
    const certificatesGrid = document.getElementById('certificatesGrid');
    const certificateFilters = document.getElementById('certificateFilters');
    
    if (!certificatesGrid || !certificateFilters) return;

    // Render filter buttons
    certificateFilters.innerHTML = categories.certificates.map(category => `
        <button class="filter-btn ${category === filterCategory ? 'active' : ''}" 
                onclick="renderCertificates('${category}')">${category}</button>
    `).join('');

    // Filter certificates
    const filteredCertificates = filterCategory === 'All' 
        ? portfolioData.certificates 
        : portfolioData.certificates.filter(cert => cert.category === filterCategory);

    // Render certificates
    certificatesGrid.innerHTML = filteredCertificates.map(cert => `
        <div class="certificate-card">
            <div class="certificate-header">
                <div class="certificate-logo">
                    <img src="${cert.logo}" alt="${cert.issuer}">
                </div>
                <div class="certificate-date">
                    <i class="fas fa-calendar"></i>
                    <span>${cert.date}</span>
                </div>
            </div>
            <h3 class="certificate-title">${cert.title}</h3>
            <div class="certificate-issuer">
                <i class="fas fa-building"></i>
                <span>${cert.issuer}</span>
            </div>
            <p class="certificate-description">${cert.description}</p>
            <div class="certificate-level-row">
                <span class="certificate-level ${levelColors[cert.level] || 'color-gray'}">${cert.level}</span>
                <span class="certificate-validity">Valid until: ${cert.validUntil}</span>
            </div>
            <div class="certificate-skills">
                <div class="certificate-skills-tags">
                    ${cert.skills.slice(0, 3).map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
                    ${cert.skills.length > 3 ? `<span class="certificate-skills-more">+${cert.skills.length - 3} more</span>` : ''}
                </div>
            </div>
            <div class="certificate-footer">
                <div class="certificate-verified">
                    <i class="fas fa-check-circle"></i>
                    <span>Verified</span>
                </div>
                <a href="${cert.verifyUrl}" class="certificate-verify">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Verify</span>
                </a>
            </div>
            <div class="certificate-credential">
                Credential ID: ${cert.credentialId}
            </div>
        </div>
    `).join('');
}

// Initialize all components
function initializeComponents() {
    renderSkills();
    renderEducation();
    renderCoursework();
    renderProjects();
    renderInternships();
    renderCertificates();
}