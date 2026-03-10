document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('login-form');
    const errorMessageDiv = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Megakadályozzuk az oldal újratöltését
            event.preventDefault();
            errorMessageDiv.textContent = '';

            // Adatok kinyerése
            const email = document.getElementById('email').value;
            
            console.log('Bejelentkezési kísérlet indítva...');
            console.log(`Email: ${email}`);

            // Szimulált sikeres bejelentkezés
            alert(`Sikeres bejelentkezés! Üdv újra, ${email}! (A Firebase bekötés még hátravan)`);
            
            // Itt majd át fogjuk irányítani a felhasználót a főoldalra vagy a játéktérre
        });
    }

});