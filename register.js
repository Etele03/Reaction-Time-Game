document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessageDiv = document.getElementById('error-message');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            errorMessageDiv.textContent = '';

            if (passwordInput.value !== confirmPasswordInput.value) {
                errorMessageDiv.textContent = 'Hiba: A megadott jelszavak nem egyeznek!';
                return; 
            }

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;

            console.log('Regisztrációs kísérlet indítva...');
            console.log(`Felhasználó: ${username}, Email: ${email}`);

            alert(`Sikeres regisztráció! Üdvözlünk, ${username}!`);
        });
    }
});