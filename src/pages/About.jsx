import React from 'react';

import NavBar from '../components/NavBar';

import '../style/AboutStyle.css'

const About = () => {
 return (
    <>
    <NavBar />
    <div className='about-section'>
      <h2 className='about-title'>About</h2>
      <p className='about-text'>
        This is a Pokédex application built with React. The application uses the PokeAPI 
        to fetch data about the Pokemons (e.g. Stats, Abilities, etc.), and also the Pokemons themselves.
        By clicking on a Pokemon card you will get the stats for the specific Pokemon. With the buttons,
        'Previous' and 'Next' you can switch between different pages to see other Pokemons. Enjoy!
      </p>
    </div>
    </>
 );
};

export default About;
