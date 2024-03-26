import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import About from './pages/About';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" exact element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
 );
}

export default App;