// game.js - A Reflex Teszt logikája

document.addEventListener('DOMContentLoaded', () => {
    
    const gameArea = document.getElementById('game-area');
    const gameText = document.getElementById('game-text');
    const gameSubtext = document.getElementById('game-subtext');

    if (!gameArea) return;

    let state = 'idle'; 
    let startTime = 0;
    let timeoutId = null;

    const handleGameAction = () => {
        // 1. Állapot: Indítás vagy Újrakezdés
        if (state === 'idle' || state === 'result') {
            state = 'waiting';
            gameArea.className = 'game-area bg-waiting'; 
            gameText.textContent = 'Várj...'; 
            gameSubtext.textContent = '';

            // SOKKAL VÉLETLENSZERŰBB IDŐZÍTÉS: 
            // 1200 ms (1.2 mp) és 6000 ms (6.0 mp) között bármikor válthat!
            const randomDelay = Math.floor(Math.random() * 4800) + 1200;
            
            // Fejlesztői segítség: Írjuk ki a konzolra, hogy lássuk a véletlenszerűséget
            console.log(`A következő zöld jelzés pontosan ${randomDelay} ms múlva jön.`);
            
            timeoutId = setTimeout(() => {
                state = 'go';
                gameArea.className = 'game-area bg-go'; 
                gameText.textContent = 'MOST!';
                startTime = Date.now();
            }, randomDelay);
        } 
        
        // 2. Állapot: Túl hamar reagált (Még piros volt a képernyő)
        else if (state === 'waiting') {
            clearTimeout(timeoutId); 
            state = 'result';
            gameArea.className = 'game-area bg-idle'; 
            gameText.textContent = 'Túl korai!';
            gameSubtext.textContent = 'Újra: Kattints / Space'; 
        } 
        
        // 3. Állapot: Sikeres reakció (Zöld volt a képernyő)
        else if (state === 'go') {
            const reactionTime = Date.now() - startTime; 
            state = 'result';
            gameArea.className = 'game-area bg-idle';
            gameText.textContent = `${reactionTime} ms`; 
            gameSubtext.textContent = 'Újra: Kattints / Space'; 
            
            console.log(`Eredmény rögzítve: ${reactionTime} ms`);
        }
    };

    // Egérkattintás
    gameArea.addEventListener('click', () => {
        handleGameAction();
    });

    // Space (Szóköz) lenyomása
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.key === ' ') {
            event.preventDefault(); 
            handleGameAction();
        }
    });

    console.log('Játék modul aktív. Szélesebb random időzítéssel (1.2s - 6s).');
});