document.addEventListener('DOMContentLoaded', () => {
    
    // Hamburger menü elemeinek kiválasztása
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); 
        });
    }

    console.log('Főoldal betöltve, hamburger menü aktív.');
    
});