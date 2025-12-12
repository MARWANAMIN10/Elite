// Shared JavaScript Functions

// Check authentication on page load
function checkAuth() {
    // Only run on pages that need authentication
    if (!window.location.pathname.includes('index.html')) {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'index.html';
            return false;
        }
    }
    return true;
}

// Highlight active navigation link
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'home.html')) {
            link.classList.add('active-link');
        }
    });
}

// Handle logout
function setupLogout() {
    const logoutLinks = document.querySelectorAll('#nav-logout');
    logoutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            window.location.href = 'index.html';
        });
    });
}

// Initialize shared functions
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    highlightActiveNav();
    setupLogout();
});