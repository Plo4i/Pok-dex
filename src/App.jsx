import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import About from './pages/About';

function App() {
 return (
    <Router>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/Pokedex" exact element={<PokemonList />} />
        <Route path="/Pokedex/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/Pokedex/about" element={<About />} />
      </Routes>
    </Router>
 );
}

export default App;
