// Services dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    // Replace the services link with a dropdown
    const servicesLi = document.querySelector('nav ul li a[href="#services"]').parentElement;
    servicesLi.innerHTML = `
        <a href="#services">Services ▼</a>
        <ul class="dropdown">
            <li><a href="#web-dev">Web Development</a></li>
            <li><a href="#app-dev">App Development</a></li>
            <li><a href="#cloud">Cloud Solutions</a></li>
            <li><a href="#consulting">IT Consulting</a></li>
        </ul>
    `;

    // Dropdown functionality
    servicesLi.addEventListener('mouseenter', () => {
        servicesLi.querySelector('.dropdown').style.display = 'block';
    });

    servicesLi.addEventListener('mouseleave', () => {
        servicesLi.querySelector('.dropdown').style.display = 'none';
    });

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                message: this.querySelector('#message').value
            };
            
            // For demonstration purposes, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Add active state to navigation items
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});