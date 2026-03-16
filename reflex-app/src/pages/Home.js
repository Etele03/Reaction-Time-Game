import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h1>Tedd próbára a <span className="text-blue">sebességed</span></h1>
      <p className="subtitle">
        Mérd meg a reakcióidődet milliszekundum pontossággal, versenyezz a barátaiddal, 
        és kerülj fel a globális ranglista élére!
      </p>
      
      <div className="cta-container">
        <Link to="/game" className="btn btn-primary">Játék Indítása</Link>
        <Link to="/leaderboard" className="btn btn-secondary">Ranglista</Link>
      </div>
    </main>
  );
}