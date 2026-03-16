import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  // Állapotok a beviteli mezőknek és a hibaüzenetnek
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Sikeres regisztráció utáni átirányításhoz

  const handleSubmit = (e) => {
    e.preventDefault(); // Megakadályozza az oldal újratöltését
    setError(''); // Hibaüzenet törlése új próbálkozásnál

    // Jelszavak egyezésének ellenőrzése
    if (password !== confirmPassword) {
      setError('Hiba: A megadott jelszavak nem egyeznek!');
      return;
    }

    console.log('Regisztrációs kísérlet indítva...');
    console.log(`Felhasználó: ${username}, Email: ${email}`);

    alert(`Sikeres regisztráció! Üdvözlünk, ${username}!`);
    
    // Átirányítás a bejelentkezéshez (később a Firebase bekötés után)
    navigate('/login'); 
  };

  return (
    <main className="form-page">
      <div className="form-container">
        <h2>Hozd létre a <span className="text-blue">fiókod</span></h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Felhasználónév</label>
            <input 
              type="text" 
              id="username" 
              placeholder="pl. VillamKeze23" 
              required 
              minLength="3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail cím</label>
            <input 
              type="email" 
              id="email" 
              placeholder="pelda@email.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Jelszó</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Legalább 6 karakter" 
              required 
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Jelszó újra</label>
            <input 
              type="password" 
              id="confirm-password" 
              placeholder="Jelszó megerősítése" 
              required 
              minLength="6"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Csak akkor jelenítjük meg a hiba div-et, ha van hiba */}
          {error && <div className="error-text">{error}</div>}

          <button type="submit" className="btn btn-primary btn-full">Regisztráció</button>
        </form>

        <p className="form-footer">
          Már van fiókod? <Link to="/login" className="text-neon">Jelentkezz be!</Link>
        </p>
      </div>
    </main>
  );
}