// Function to highlight the active nav link
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    let currentSection = '';

    // Loop through each section and check if it's in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.id; // Store the id of the section that's in view
        }
    });

    // Update the active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active'); // Add active class to the current section's link
        }
    });
}

// Listen for scroll events to update active nav link
window.addEventListener('scroll', setActiveNavLink);

// Set active nav link on page load (in case the page is loaded in the middle)
document.addEventListener('DOMContentLoaded', setActiveNavLink);

