// Details Page Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // Property Data
    const propertyData = {
        'villa': {
            title: 'Luxury Villa',
            price: '$1,500,000',
            location: 'Cairo, New Giza',
            details: 'A stunning 5-bedroom villa with a private pool and spacious garden. Located in a prime, exclusive neighborhood. Ideal for large families.',
            features: ['5 Bedrooms', '3 Bathrooms', 'Private Pool', '2 Parking Spots', '800 sqm Land', 'Garden', 'Security System', 'Modern Kitchen'],
            img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
        },
        'apartment': {
            title: 'Modern Apartment',
            price: '$250,000',
            location: 'Alexandria, Seafront',
            details: 'A sleek, modern 2-bedroom apartment in the heart of the city, offering stunning sea views and proximity to all amenities. Fully furnished.',
            features: ['2 Bedrooms', '2 Bathrooms', 'Sea View Balcony', 'Central AC', '120 sqm Area', 'Fully Furnished', 'Gym Access', '24/7 Security'],
            img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'
        },
        'family': {
            title: 'Cozy Family Home',
            price: '$450,000',
            location: 'Giza, Sheikh Zayed',
            details: 'Perfect starter home for a growing family. Quiet neighborhood with excellent schools nearby. Ready to move in condition.',
            features: ['3 Bedrooms', '2 Bathrooms', 'Small Garden', 'Attached Garage', '250 sqm Land', 'Updated Kitchen', 'Quiet Neighborhood', 'Near Schools'],
            img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c'
        },
        'beach': {
            title: 'Beach House Retreat',
            price: '$950,000',
            location: 'North Coast, Marassi',
            details: 'Stunning beachfront property with direct access to the sand. Features large terraces and panoramic ocean views.',
            features: ['4 Bedrooms', '3 Bathrooms', 'Ocean View', 'Private Beach Access', 'Fully Renovated', 'Large Terrace', 'Outdoor Kitchen', 'Pool'],
            img: 'https://images.unsplash.com/photo-1507086185734-2f7f3a0f9324'
        },
        'penthouse': {
            title: 'Luxury Penthouse',
            price: '$720,000',
            location: 'New Cairo, Fifth Settlement',
            details: 'Exclusive top-floor penthouse with expansive city views and a private rooftop terrace. High-end finishes throughout.',
            features: ['3 Bedrooms', '3 Bathrooms', 'Rooftop Terrace', 'Gym Access', '250 sqm Area', 'City Views', 'Smart Home System', 'Concierge Service'],
            img: 'https://images.unsplash.com/photo-1532910401693-730c4e89f05a'
        },
        'downtown': {
            title: 'Downtown Apartment',
            price: '$180,000',
            location: 'Downtown Cairo, City Center',
            details: 'Compact and efficient apartment in a historic building. Ideal for students or singles who want to be close to the action.',
            features: ['1 Bedroom', '1 Bathroom', 'Balcony', 'Historic Building', '75 sqm Area', 'City Center Location', 'Renovated Kitchen', 'Walkable Neighborhood'],
            img: 'https://images.unsplash.com/photo-1599423300746-b62533397364'
        }
    };

    // Get property ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    // Display property details
    const detailContent = document.getElementById('property-detail-content');
    
    if (propertyId && propertyData[propertyId]) {
        const data = propertyData[propertyId];
        const featuresList = data.features.map(f => `<li>${f}</li>`).join('');

        detailContent.innerHTML = `
            <div class="property-detail-content">
                <img src="${data.img}" alt="${data.title}">
                <div class="property-detail-info">
                    <h1>${data.title}</h1>
                    <p class="property-price">${data.price}</p>
                    <p class="property-location">Location: ${data.location}</p>
                    
                    <h3>Description</h3>
                    <p class="property-description">${data.details}</p>
                    
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${featuresList}
                    </ul>
                    
                    <a href="contact.html?property=${encodeURIComponent(data.title)}" class="btn" style="margin-top: 30px; display: block; width: 100%; text-align: center;">Contact Agent</a>
                </div>
            </div>
        `;
    } else {
        detailContent.innerHTML = `
            <div class="property-detail-loading">
                <h1>Property Not Found</h1>
                <p>The details for this property are not available.</p>
                <a href="properties.html" class="btn">Back to Properties</a>
            </div>
        `;
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