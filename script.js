// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Parallax Effects
class ParallaxController {
    constructor() {
        this.elements = [];
        this.isScrolling = false;
        this.init();
    }

    init() {
        this.setupParallaxElements();
        this.bindEvents();
        this.createHorizontalParallax();
    }

    setupParallaxElements() {
        // Hero content parallax
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        if (heroContent && heroImage) {
            this.elements.push({
                element: heroContent,
                speed: 0.5,
                direction: 'vertical'
            });
            this.elements.push({
                element: heroImage,
                speed: -0.3,
                direction: 'vertical'
            });
        }

        // Feature cards parallax
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            this.elements.push({
                element: card,
                speed: 0.2 + (index * 0.1),
                direction: 'both',
                rotation: true
            });
        });

        // Stats section parallax
        const statsText = document.querySelector('.stats-text');
        const statsImages = document.querySelector('.stats-images');
        if (statsText && statsImages) {
            this.elements.push({
                element: statsText,
                speed: 0.4,
                direction: 'vertical'
            });
            this.elements.push({
                element: statsImages,
                speed: -0.2,
                direction: 'horizontal'
            });
        }

        // Team cards parallax
        document.querySelectorAll('.team-card').forEach((card, index) => {
            this.elements.push({
                element: card,
                speed: 0.15 + (index * 0.05),
                direction: 'both',
                scale: true
            });
        });

        // Contact section parallax
        const contactInfo = document.querySelector('.contact-info');
        const contactImage = document.querySelector('.contact-image');
        if (contactInfo && contactImage) {
            this.elements.push({
                element: contactInfo,
                speed: 0.3,
                direction: 'vertical'
            });
            this.elements.push({
                element: contactImage,
                speed: -0.4,
                direction: 'horizontal'
            });
        }

        // FAQ items parallax
        document.querySelectorAll('.faq-item').forEach((item, index) => {
            this.elements.push({
                element: item,
                speed: 0.1 + (index * 0.02),
                direction: index % 2 === 0 ? 'horizontal' : 'vertical'
            });
        });
    }

    bindEvents() {
        let ticking = false;

        const updateParallax = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateElements();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', updateParallax, { passive: true });
        window.addEventListener('mousemove', (e) => {
            this.updateMouseParallax(e);
        }, { passive: true });

        // Resize handler
        window.addEventListener('resize', () => {
            this.elements.forEach(item => {
                item.element.style.transform = '';
            });
        });
    }

    updateElements() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Skip parallax on mobile for performance
        if (windowWidth <= 768) return;

        this.elements.forEach(item => {
            const elementTop = item.element.offsetTop;
            const elementHeight = item.element.offsetHeight;
            const elementBottom = elementTop + elementHeight;

            // Check if element is in viewport
            if (elementBottom >= scrollTop && elementTop <= scrollTop + windowHeight) {
                const progress = (scrollTop - elementTop + windowHeight) / (windowHeight + elementHeight);
                const clampedProgress = Math.max(0, Math.min(1, progress));

                let transformString = '';

                if (item.direction === 'vertical' || item.direction === 'both') {
                    const yOffset = (clampedProgress - 0.5) * item.speed * 100;
                    transformString += `translateY(${yOffset}px) `;
                }

                if (item.direction === 'horizontal' || item.direction === 'both') {
                    const xOffset = (clampedProgress - 0.5) * item.speed * 50;
                    transformString += `translateX(${xOffset}px) `;
                }

                if (item.rotation) {
                    const rotation = clampedProgress * item.speed * 10;
                    transformString += `rotate(${rotation}deg) `;
                }

                if (item.scale) {
                    const scale = 1 + (clampedProgress - 0.5) * item.speed * 0.1;
                    transformString += `scale(${scale}) `;
                }

                item.element.style.transform = transformString;
            }
        });
    }

    updateMouseParallax(e) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Skip on mobile
        if (windowWidth <= 768) return;

        const mouseX = (e.clientX / windowWidth - 0.5) * 2;
        const mouseY = (e.clientY / windowHeight - 0.5) * 2;

        // Apply mouse parallax to floating cards
        document.querySelectorAll('.floating-card').forEach((card, index) => {
            const intensity = (index + 1) * 10;
            const xOffset = mouseX * intensity;
            const yOffset = mouseY * intensity;
            card.style.transform += ` translate(${xOffset}px, ${yOffset}px)`;
        });

        // Apply mouse parallax to partner logos
        document.querySelectorAll('.partner-logo').forEach((logo, index) => {
            const intensity = 5;
            const xOffset = mouseX * intensity * (index % 2 === 0 ? 1 : -1);
            logo.style.transform = `translateX(${xOffset}px)`;
        });
    }

    createHorizontalParallax() {
        // Create floating shapes for horizontal parallax
        const parallaxContainer = document.createElement('div');
        parallaxContainer.className = 'horizontal-parallax';
        document.body.appendChild(parallaxContainer);

        for (let i = 0; i < 3; i++) {
            const shape = document.createElement('div');
            shape.className = `parallax-shape shape-${i + 1}`;
            parallaxContainer.appendChild(shape);
        }
    }
}

// Animate statistics numbers
const animateNumbers = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                if (stat.textContent.includes('%')) {
                    stat.textContent = Math.ceil(current) + '%';
                } else if (stat.textContent.includes('+')) {
                    stat.textContent = Math.ceil(current) + '+';
                } else {
                    stat.textContent = Math.ceil(current);
                }
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = stat.textContent; // Reset to original
            }
        };
        
        updateNumber();
    });
};

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add stagger animation for cards
            if (entry.target.classList.contains('feature-card') || 
                entry.target.classList.contains('team-card') ||
                entry.target.classList.contains('pricing-card')) {
                const cards = entry.target.parentElement.children;
                const index = Array.from(cards).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
            
            // Animate statistics when they come into view
            if (entry.target.classList.contains('statistics')) {
                setTimeout(animateNumbers, 500);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .pricing-card, .team-card, .faq-item, .statistics').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission with enhanced animation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            // Shake animation for invalid form
            contactForm.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                contactForm.style.animation = '';
            }, 500);
            alert('Please fill in all fields');
            return;
        }
        
        // Success animation
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.style.transform = 'scale(0.95)';
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
            submitBtn.textContent = 'Sent!';
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
            }, 2000);
        }, 1000);
    });
}

// Add shake animation keyframes
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = shakeKeyframes;
document.head.appendChild(styleSheet);

// Initialize parallax controller
let parallaxController;
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    parallaxController = new ParallaxController();
});

// Performance monitoring
let lastScrollTime = 0;
const throttleScroll = (callback, delay) => {
    return function() {
        const now = Date.now();
        if (now - lastScrollTime >= delay) {
            callback.apply(this, arguments);
            lastScrollTime = now;
        }
    };
};

// Preload critical images
const preloadImages = () => {
    const imageUrls = [
        'https://placehold.co/120x40/8b5cf6/ffffff?text=LOGO',
        'https://placehold.co/400x500/667eea/ffffff?text=Professional+Person',
        'https://placehold.co/400x300/f8fafc/6b7280?text=Team+Working'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// Initialize preloading
preloadImages();