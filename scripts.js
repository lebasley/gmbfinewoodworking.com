// Handling Button Clicks
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.contact-form button');
    button.addEventListener('click', function(event) {
        alert('Button clicked!');
    });
});

// Simple Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all required fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

// Toggle Navigation Menu on Mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});