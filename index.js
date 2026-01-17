

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Image Loading Debug & Error Handling
const portraitImg = document.querySelector('.portrait-img');

if (portraitImg) {
    portraitImg.addEventListener('load', () => {
        console.log('✅ Profile image loaded successfully!');
    });

    portraitImg.addEventListener('error', () => {
        console.error('❌ Failed to load profile image from:', portraitImg.src);
        console.log('Make sure profile.jpg is in the same folder as index.html');
        
        // Fallback: Set a placeholder background
        portraitImg.style.backgroundColor = '#e0e0e0';
        portraitImg.style.color = '#666';
    });

    // Log the image source for debugging
    console.log('📸 Image source:', portraitImg.src);
    console.log('📂 Image alt text:', portraitImg.alt);
} else {
    console.warn('⚠️ Portrait image element not found');
}
