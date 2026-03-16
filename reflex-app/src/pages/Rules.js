import React from 'react';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <main className="content-page">
      <div className="content-card">
        <h2>Hogyan <span className="text-blue">játssz?</span></h2>
        
        <div className="rules-text">
          <h3>🎯 A játék célja</h3>
          <p>Mérd meg a reakcióidődet milliszekundum pontossággal! Figyeld a képernyőt, és reagálj a felvillanó vizuális ingerekre a lehető leggyorsabban.</p>

          <h3>🎮 Irányítás (Billentyűzet)</h3>
          <p>A legpontosabb mérés érdekében a játékot billentyűzettel érdemes irányítani:</p>
          <ul>
            <li>Amikor a játéktér hirtelen <strong>zöldre</strong> vált, nyomd meg a <strong>SZÓKÖZ (Space)</strong> gombot amilyen gyorsan csak tudod!</li>
            <li>A teszt 5 körből áll, a rendszer a végén átlagolja a reakcióidődet.</li>
          </ul>

          <h3>⚠️ Pontozás és Büntetések</h3>
          <ul>
            <li>A ranglistán a <strong>legkisebb idő (ms)</strong> nyer. Minél gyorsabb vagy, annál feljebb kerülsz!</li>
            <li><strong>Túl korai kattintás:</strong> Ha megnyomod a gombot, mielőtt a zöld jelzés megjelenne, a kísérlet érvénytelen lesz.</li>
          </ul>
        </div>

        <div className="rules-footer">
          <Link to="/game" className="btn btn-primary">Készen állok, Indítás!</Link>
        </div>
      </div>
    </main>
  );
}