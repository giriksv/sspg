// Load header content
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Initialize navigation functionality after loading header
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const section = link.getAttribute('href').substring(1);
                showSection(section);
                toggleMenu(); // Ensure menu closes after click in mobile view
            });
        });

        // Set the default active tab to Home
        const homeLink = document.querySelector('nav a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active');
            homeLink.style.color = '#175888'; // Set Home link color
            homeLink.style.borderBottom = '2px solid #175888'; // Underline Home link
        }
    });

// Show specific section and update navigation links
function showSection(section) {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        link.style.borderBottom = 'none'; // Remove underline from all links
        link.style.color = '#000'; // Reset color to default for all links
    });

    document.getElementById(section).style.display = 'block';

    // Activate the clicked link
    const activeLink = document.querySelector(`nav a[href="#${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        activeLink.style.color = '#175888'; // Set active color
        activeLink.style.borderBottom = '2px solid #175888'; // Add underline
    }
}

// Set home section as default on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Activating Home tab.");
    showSection('home'); // Show Home section initially
});

function toggleMenu() {
    document.getElementById('mobileNav').classList.toggle('active');
}