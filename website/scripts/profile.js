// Profile Page Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // Populate user data
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    
    if (username) {
        document.querySelector('.profile-details p:nth-child(1)').innerHTML = `<strong>Username:</strong> ${username}`;
    }
    
    if (email) {
        document.querySelector('.profile-details p:nth-child(2)').innerHTML = `<strong>Email:</strong> ${email}`;
    }

    // Handle logout
    document.getElementById('nav-logout').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.href = 'index.html';
    });
});