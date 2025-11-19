/**
 * Portfolio Website - Adam Beloucif
 * Author: Adam Beloucif
 * Description: Portfolio professionnel avec intégration GitHub API
 */

// ===================================================
// CONFIGURATION
// ===================================================
const GITHUB_USERNAME = 'Adam-Blf';
const GITHUB_TOKEN = ''; // Add your GitHub token here for higher API rate limit (optional)

// Typing animation texts
const typingTexts = [
    'Data Engineer',
    'Étudiant en IA',
    'Développeur Python',
    'Passionné de Data',
    'Problem Solver'
];

// ===================================================
// DOM ELEMENTS
// ===================================================
const elements = {
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('.nav-link'),
    typingText: document.getElementById('typingText'),
    projectsGrid: document.getElementById('projectsGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    contactForm: document.getElementById('contactForm'),
    formSuccess: document.getElementById('formSuccess'),
    scrollTop: document.getElementById('scrollTop'),
    statNumbers: document.querySelectorAll('.stat-number')
};

// ===================================================
// NAVIGATION
// ===================================================
// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        elements.navbar.classList.add('scrolled');
        elements.scrollTop.classList.add('visible');
    } else {
        elements.navbar.classList.remove('scrolled');
        elements.scrollTop.classList.remove('visible');
    }
});

// Mobile menu toggle
elements.navToggle.addEventListener('click', () => {
    elements.navMenu.classList.toggle('active');
    elements.navToggle.classList.toggle('active');
});

// Close mobile menu on link click
elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        elements.navMenu.classList.remove('active');
        elements.navToggle.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll to top
elements.scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================================================
// TYPING ANIMATION
// ===================================================
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        elements.typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        elements.typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// ===================================================
// COUNTER ANIMATION
// ===================================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

elements.statNumbers.forEach(counter => {
    counterObserver.observe(counter);
});

// ===================================================
// LANGUAGE BARS ANIMATION
// ===================================================
const languageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = progress + '%';
        }
    });
}, observerOptions);

document.querySelectorAll('.language-progress').forEach(bar => {
    languageObserver.observe(bar);
});

// ===================================================
// GITHUB PROJECTS
// ===================================================
let allProjects = [];

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des projets');
        }
        
        const repos = await response.json();
        
        // Filter out forks and sort by stars
        allProjects = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        // Update projects count
        const projectCounter = document.querySelector('.stat-number[data-target="10"]');
        if (projectCounter) {
            projectCounter.setAttribute('data-target', allProjects.length);
        }
        
        displayProjects(allProjects);
    } catch (error) {
        console.error('Erreur:', error);
        elements.projectsGrid.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Impossible de charger les projets GitHub</p>
                <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" class="btn btn-primary">
                    Voir sur GitHub
                </a>
            </div>
        `;
    }
}

function categorizeProject(repo) {
    const categories = [];
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    const language = (repo.language || '').toLowerCase();
    
    // Language-based categories
    if (language === 'python') categories.push('python');
    if (language === 'javascript' || language === 'html' || language === 'css') categories.push('javascript', 'web');
    
    // AI/ML keywords
    const aiKeywords = ['ai', 'ml', 'machine-learning', 'nlp', 'neural', 'model', 'tensorflow', 'pytorch', 'langchain'];
    if (aiKeywords.some(keyword => name.includes(keyword) || description.includes(keyword))) {
        categories.push('ai');
    }
    
    // Web keywords
    const webKeywords = ['web', 'site', 'portfolio', 'game', 'calculator', 'pong', 'snake'];
    if (webKeywords.some(keyword => name.includes(keyword) || description.includes(keyword))) {
        categories.push('web');
    }
    
    return categories.length > 0 ? categories : ['all'];
}

function displayProjects(projects) {
    if (projects.length === 0) {
        elements.projectsGrid.innerHTML = `
            <div class="no-projects">
                <i class="fas fa-folder-open"></i>
                <p>Aucun projet trouvé</p>
            </div>
        `;
        return;
    }
    
    elements.projectsGrid.innerHTML = projects.map(repo => {
        const categories = categorizeProject(repo);
        const languageColor = getLanguageColor(repo.language);
        
        return `
            <div class="project-card" data-categories="${categories.join(' ')}">
                <div class="project-header">
                    <div class="project-icon">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="project-links">
                        <a href="${repo.html_url}" target="_blank" title="Voir sur GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        ${repo.homepage ? `
                            <a href="${repo.homepage}" target="_blank" title="Voir le site">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
                <div class="project-content">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Pas de description disponible'}</p>
                </div>
                <div class="project-footer">
                    ${repo.language ? `
                        <span class="project-language">
                            <span class="language-dot" style="background-color: ${languageColor}"></span>
                            ${repo.language}
                        </span>
                    ` : ''}
                    <span class="project-stats">
                        <i class="fas fa-star"></i> ${repo.stargazers_count}
                        <i class="fas fa-code-branch"></i> ${repo.forks_count}
                    </span>
                </div>
                ${repo.topics && repo.topics.length > 0 ? `
                    <div class="project-topics">
                        ${repo.topics.slice(0, 3).map(topic => `<span class="topic">${topic}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
    
    // Add animation
    const cards = elements.projectsGrid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 50);
    });
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'TypeScript': '#2b7489',
        'Java': '#b07219',
        'C++': '#f34b7d',
        'C': '#555555',
        'Go': '#00ADD8',
        'Rust': '#dea584'
    };
    return colors[language] || '#8257e5';
}

// ===================================================
// PROJECT FILTERS
// ===================================================
elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        const projectCards = elements.projectsGrid.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-categories').split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===================================================
// CONTACT FORM
// ===================================================
elements.contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(elements.contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission (replace with actual backend)
    console.log('Form data:', data);
    
    // Create mailto link
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const mailtoLink = `mailto:adam.beloucif@efrei.net?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success message
    elements.contactForm.style.display = 'none';
    elements.formSuccess.classList.remove('hidden');
    
    // Reset form after 3 seconds
    setTimeout(() => {
        elements.contactForm.reset();
        elements.contactForm.style.display = 'block';
        elements.formSuccess.classList.add('hidden');
    }, 3000);
});

// ===================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================================
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .education-item, .skill-item').forEach(el => {
    animationObserver.observe(el);
});

// ===================================================
// SCROLL REVEAL ANIMATIONS
// ===================================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section');
    
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            section.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ===================================================
// INITIALIZATION
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects();
    console.log('Portfolio chargé avec succès ! 🚀');
});

// ===================================================
// PERFORMANCE OPTIMIZATION
// ===================================================
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
