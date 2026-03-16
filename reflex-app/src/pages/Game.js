import React, { useState, useEffect, useRef } from 'react';

export default function Game() {
  const [gameState, setGameState] = useState('idle'); 
  const [message, setMessage] = useState('Kattints vagy Space');
  const [subMessage, setSubMessage] = useState('Várj a zöld jelzésre!');

  const timeoutRef = useRef(null);
  const startTimeRef = useRef(0);
  
  // REACT TRÜKK: Mivel a billentyűzet-figyelő (Event Listener) "beragadna" 
  // a régi állapotba, egy ref-ben is tároljuk az aktuális játékszituációt.
  const gameStateRef = useRef(gameState);
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const handleGameAction = () => {
    const currentState = gameStateRef.current; // Mindig a legfrissebb állapotot nézzük

    if (currentState === 'idle' || currentState === 'result') {
      setGameState('waiting');
      setMessage('Várj...');
      setSubMessage('');

      const randomDelay = Math.floor(Math.random() * 4800) + 1200;
      console.log(`Zöld jelzés ${randomDelay} ms múlva...`);

      // Beállítjuk a visszaszámlálót
      timeoutRef.current = setTimeout(() => {
        setGameState('go');
        setMessage('MOST!');
        startTimeRef.current = Date.now();
      }, randomDelay);
      
    } else if (currentState === 'waiting') {
      // Túl korai kattintás -> Megállítjuk a visszaszámlálót
      clearTimeout(timeoutRef.current);
      setGameState('result');
      setMessage('Túl korai!');
      setSubMessage('Újra: Kattints / Space');
      
    } else if (currentState === 'go') {
      // Sikeres reakció
      const reactionTime = Date.now() - startTimeRef.current;
      setGameState('result');
      setMessage(`${reactionTime} ms`);
      setSubMessage('Újra: Kattints / Space');
      console.log(`Eredmény rögzítve: ${reactionTime} ms`);
    }
  };

  // 1. Billentyűzet figyelése (Csak egyszer töltődik be a [] miatt)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
        handleGameAction();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Takarítás: Ha elmegyünk másik oldalra, levesszük a figyelőt
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // <-- Ez a kis üres tömb hiányzott, ami a galibát okozta!

  // 2. Takarítás: Ha elnavigálunk az oldalról, megállítjuk az időzítőt, ha épp futott
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Háttérszín meghatározása az állapot alapján
  let bgClass = 'bg-idle';
  if (gameState === 'waiting') bgClass = 'bg-waiting';
  if (gameState === 'go') bgClass = 'bg-go';

  return (
    <main className="game-container">
      <div 
        className={`game-area ${bgClass}`} 
        onClick={handleGameAction}
      >
        <h1>{message}</h1>
        <p>{subMessage}</p>
      </div>
    </main>
  );
}