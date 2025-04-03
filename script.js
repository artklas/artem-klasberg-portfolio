// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // The smooth scroll magic
                block: 'start' // Scroll to the top of the target element
            });
        }
    });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();