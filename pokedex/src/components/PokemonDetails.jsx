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
      <h2 className='pokemon-name'>{pokemonDetails.name}</h2>
      <div>
        <h3>Types:</h3>
        <ul>
          {pokemonDetails.types && pokemonDetails.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Stats:</h3>
        <ul>
          {pokemonDetails.stats && pokemonDetails.stats.map((stat, index) => (
            <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Abilities:</h3>
        <ul>
          {pokemonDetails.abilities && pokemonDetails.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Height:</h3>
        <p>{pokemonDetails.height / 10} m</p>
      </div>
      <div>
        <h3>Weight:</h3>
        <p>{pokemonDetails.weight / 10} kg</p>
      </div>
    </div>
 );
};

export default PokemonDetails;