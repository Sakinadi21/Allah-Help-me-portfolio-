// Toggle navigation menu for smaller screens
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-bar');
    const navMenu = document.querySelector('.nav-right');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Handle form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Submitted successfully!');
        contactForm.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all the required fields.');
    }
});


// Change the logo color on hover
const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', function () {
    logo.style.color = '#FF6347'; // Change to any color you like
});
logo.addEventListener('mouseleave', function () {
    logo.style.color = ''; // Revert to original color
});

// Animate portfolio button on hover
const portfolioButton = document.querySelector('.portfolio-button');
portfolioButton.addEventListener('mouseenter', function () {
    portfolioButton.classList.add('animated');
});
portfolioButton.addEventListener('mouseleave', function () {
    portfolioButton.classList.remove('animated');
});

// Toggle case study images visibility on click
const caseStudies = document.querySelectorAll('.case-study');
caseStudies.forEach(caseStudy => {
    caseStudy.addEventListener('click', function () {
        const imagesSection = caseStudy.querySelector('.overlapping-images-section');
        imagesSection.classList.toggle('visible');
    });
});
