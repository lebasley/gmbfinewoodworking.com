// Handling Button Clicks
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.contact-form button');
    const modal = document.getElementById('custom-alert');
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Simple Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isValid = true;

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(function(error) {
            error.style.display = 'none';
        });

        // Remove error classes
        [name, email, message].forEach(function(input) {
            input.classList.remove('error');
        });

        // Validate name
        if (!name.value) {
            showError(name, 'Please enter your name.');
            isValid = false;
        }

        // Validate email
        if (!email.value) {
            showError(email, 'Please enter your email.');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate message
        if (!message.value) {
            showError(message, 'Please enter your message.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        } else {
            // Show custom alert modal on successful submission
            event.preventDefault(); // Prevent form submission for demo purposes
            const modal = document.getElementById('custom-alert');
            modal.style.display = 'block';

            // Clear the form fields
            form.reset();
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = message;
        input.classList.add('error');
        input.parentNode.insertBefore(error, input.nextSibling);
        error.style.display = 'block';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Toggle Navigation Menu on Mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// Dynamic Content Update Example
document.addEventListener('DOMContentLoaded', function() {
    const dynamicContentButton = document.getElementById('dynamic-content-button');
    const dynamicContentContainer = document.getElementById('dynamic-content-container');

    dynamicContentButton.addEventListener('click', function() {
        const currentTime = new Date().toLocaleTimeString();
        dynamicContentContainer.innerHTML = `<p>This is dynamically updated content! Button clicked at: ${currentTime}</p>`;
    });
});