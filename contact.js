// Contact Page Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // Get property from URL if exists
    const urlParams = new URLSearchParams(window.location.search);
    const propertyName = urlParams.get('property');
    
    if (propertyName) {
        document.getElementById('contact-property').value = propertyName;
    }

    // Populate user data if available
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    
    if (username) {
        document.getElementById('contact-name').value = username;
    }
    
    if (email) {
        document.getElementById('contact-email').value = email;
    }

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const property = document.getElementById('contact-property').value || 'General Inquiry';
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const phone = document.getElementById('contact-phone').value;
        const message = document.getElementById('contact-message').value;
        const agent = document.getElementById('contact-agent').value;

        // In a real application, you would send this data to a server
        alert(`Thank you, ${name}! Your inquiry about "${property}" has been sent. An agent will contact you shortly!`);
        
        // Store inquiry in localStorage (for demo purposes)
        const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push({
            property,
            name,
            email,
            phone,
            message,
            agent,
            date: new Date().toISOString()
        });
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        
        // Clear form
        this.reset();
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    });

    // Handle logout
    document.getElementById('nav-logout').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.href = 'index.html';
    });
});