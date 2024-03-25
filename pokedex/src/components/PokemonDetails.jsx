import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../services/pokemonService';

const PokemonDetails = () => {
 const { name } = useParams();
 const [pokemonDetails, setPokemonDetails] = useState({});

 useEffect(() => {
    const fetchDetails = async () => {
      const details = await getPokemonDetails(name);
      setPokemonDetails(details);
    };

    fetchDetails();
 }, [name]);

 return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      {/* Display other details here */}
    </div>
 );
};

export default PokemonDetails;
