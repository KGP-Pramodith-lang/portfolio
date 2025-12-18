// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only smooth scroll for links within the same page (starting with #)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active state to navigation items on scroll
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.backgroundColor = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.backgroundColor = '#1976d2';
            }
        });
    });

    console.log('Portfolio website loaded successfully!');
    console.log('All content is editable via IDs for easy customization.');
});