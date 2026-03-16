import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Ezeket később csináljuk meg:
// import Game from './pages/Game';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Rules from './pages/Rules';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ide jön majd a többi oldal útvonala */}
      </Routes>
      
      <footer>
        <p>&copy; 2026 ReflexApp. Projektmunka.</p>
      </footer>
    </Router>
  );
}

export default App;