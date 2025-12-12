// Home Page Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // Display username in navbar if needed
    const username = localStorage.getItem('username');
    if (username) {
        // You could add username display to navbar here
    }

    // Add scroll animations for properties
    function revealProperties() {
        const properties = document.querySelectorAll(".property");
        
        properties.forEach((property, index) => {
            const windowHeight = window.innerHeight;
            const elementTop = property.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 50) {
                setTimeout(() => {
                    property.classList.add("show");
                }, index * 200);
            }
        });
    }

    // Initial reveal
    setTimeout(revealProperties, 100);

    // Add scroll event listener


    // Handle logout
    document.getElementById('nav-logout').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.href = 'index.html';
    });
});