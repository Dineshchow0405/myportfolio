// Main JavaScript functionality

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Handle navigation clicks
    function handleNavigation(targetPage) {
        // Update active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-page="${targetPage}"]`).classList.add('active');

        // Show target page
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(targetPage).classList.add('active');

        // Close mobile menu
        navMenu.classList.remove('active');

        // Update URL hash
        window.location.hash = targetPage === 'home' ? '' : targetPage;
    }

    // Add click listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            handleNavigation(targetPage);
        });
    });

    // Add click listeners to buttons with data-page attribute
    document.addEventListener('click', (e) => {
        const button = e.target.closest('[data-page]');
        if (button && !button.classList.contains('nav-link')) {
            e.preventDefault();
            const targetPage = button.getAttribute('data-page');
            handleNavigation(targetPage);
        }
    });

    // Add click listeners to feature cards
    document.addEventListener('click', (e) => {
        const featureCard = e.target.closest('.feature-card[data-page]');
        if (featureCard) {
            const targetPage = featureCard.getAttribute('data-page');
            handleNavigation(targetPage);
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Handle initial page load based on hash
    function handleInitialLoad() {
        const hash = window.location.hash.slice(1);
        const targetPage = hash || 'home';
        
        if (document.getElementById(targetPage)) {
            handleNavigation(targetPage);
        } else {
            handleNavigation('home');
        }
    }

    // Handle browser back/forward
    window.addEventListener('hashchange', handleInitialLoad);

    // Initial load
    handleInitialLoad();
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and other elements for animation
    const animatedElements = document.querySelectorAll('.card, .feature-card, .project-card, .certificate-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Handle external links
function initializeExternalLinks() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="http"]');
        if (link && !link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// Loading state management
function showLoading() {
    document.body.style.opacity = '0';
}

function hideLoading() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
}

// Error handling for images
function initializeImageErrorHandling() {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            console.warn('Image failed to load:', e.target.src);
        }
    }, true);
}

// Keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }

        // Arrow keys for navigation (optional)
        if (e.ctrlKey || e.metaKey) {
            const pages = ['home', 'about', 'education', 'projects', 'internships', 'certificates'];
            const currentPage = document.querySelector('.page.active').id;
            const currentIndex = pages.indexOf(currentPage);

            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                e.preventDefault();
                const targetPage = pages[currentIndex - 1];
                document.querySelector(`[data-page="${targetPage}"]`).click();
            } else if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
                e.preventDefault();
                const targetPage = pages[currentIndex + 1];
                document.querySelector(`[data-page="${targetPage}"]`).click();
            }
        }
    });
}

// Performance optimization
function initializePerformanceOptimizations() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle resize-specific logic here
            console.log('Window resized');
        }, 250);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showLoading();
    
    try {
        initializeNavigation();
        initializeComponents();
        initializeSmoothScrolling();
        initializeAnimations();
        initializeExternalLinks();
        initializeImageErrorHandling();
        initializeKeyboardNavigation();
        initializePerformanceOptimizations();
        
        hideLoading();
        console.log('Portfolio initialized successfully');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        hideLoading();
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden');
    } else {
        console.log('Page visible');
    }
});

// Service worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Global error handler
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});