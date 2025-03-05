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

// Lightbox for Image Gallery
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    images.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = 'none';
        }
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

// Function to add fade-in animation to gallery images
function fadeInImages() {
    const images = document.querySelectorAll('.gallery-grid img');
    images.forEach((img, index) => {
        img.style.opacity = 0;
        img.style.transition = `opacity 1s ease ${index * 0.2}s`;
        img.style.opacity = 1;
    });
}

// Function to add hover effect to navigation menu items
function addNavHoverEffect() {
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#a0522d'; // Change color on hover
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '#ffffff'; // Revert color on mouse out
        });
    });
}

// Call the functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    fadeInImages();
    addNavHoverEffect();
});

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display the latest news
    fetchLatestNews();

    // Function to fetch the latest news from NewsAPI
    function fetchLatestNews() {
        const apiKey = 'f13916769f2448ac9d797a9f165521300'; // Replace with your NewsAPI key
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f13916769f2448ac9d797a9f16552130`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.getElementById('news-container');
                newsContainer.innerHTML = ''; // Clear any existing content

                data.articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('news-article');

                    const titleElement = document.createElement('h3');
                    titleElement.textContent = article.title;

                    const descriptionElement = document.createElement('p');
                    descriptionElement.textContent = article.description;

                    const linkElement = document.createElement('a');
                    linkElement.href = article.url;
                    linkElement.textContent = 'Read more';
                    linkElement.target = '_blank';

                    articleElement.appendChild(titleElement);
                    articleElement.appendChild(descriptionElement);
                    articleElement.appendChild(linkElement);

                    newsContainer.appendChild(articleElement);
                });
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    }
});