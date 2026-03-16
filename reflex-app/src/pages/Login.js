import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    console.log('Bejelentkezési kísérlet indítva...');
    console.log(`Email: ${email}`);

    alert(`Sikeres bejelentkezés! Üdv újra, ${email}!`);
    
    // Sikeres belépés után vigyük a főoldalra vagy a játékba:
    navigate('/'); 
  };

  return (
    <main className="form-page">
      <div className="form-container">
        <h2>Lépj be a <span className="text-blue">fiókodba</span></h2>
        
        <form onSubmit={handleSubmit}>
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
              placeholder="Adja meg a jelszavát" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className="error-text">{error}</div>}

          <button type="submit" className="btn btn-primary btn-full">Bejelentkezés</button>
        </form>

        <p className="form-footer">
          Nincs még fiókod? <Link to="/register" className="text-neon">Regisztrálj!</Link>
        </p>
      </div>
    </main>
  );
}