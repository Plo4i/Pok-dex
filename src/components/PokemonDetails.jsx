import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../services/pokemonService';
import { Icon } from '@iconify/react';

import '../style/PokemonDetailsStyle.css'

const PokemonDetails = () => {
 const { name } = useParams();
 const [pokemonDetails, setPokemonDetails] = useState({});

 useEffect(() => {
    const fetchDetails = async () => {
      const details = await getPokemonDetails(name);
      const primaryType = details.types[0].type.name;
      const typeClass = `pokemon-${primaryType.toLowerCase()}`; // Converting the type of pokemon to a class so it can be styled easily
      setPokemonDetails({ ...details, typeClass }); // Include typeClass in the state
    };

    fetchDetails();
}, [name]);

 const statIcons = {
    hp: <Icon icon="ph:heart" />,
    attack: <Icon icon="ph:sword" />,
    defense: <Icon icon="ph:shield-duotone" />,
    "special-attack": <Icon icon="ph:magic-wand" />,
    "special-defense": <Icon icon="ph:shield-plus-duotone" />,
    speed: <Icon icon="ph:person-simple-run-bold" />,
 };

 return (
    <div className='pokemon-details-box'>
      <div className={`pokemon-details-box-wrap ${pokemonDetails.typeClass}`}>
      <h2 className='details-pokemon-name'>{pokemonDetails.name} <img className="pokemon-image" src={pokemonDetails.sprites?.front_default} alt={pokemonDetails.name} /></h2>
      <div>
        <h3>Types:</h3>
        <ul>
          {pokemonDetails.types && pokemonDetails.types.map((type, index) => (
            <li className='bold-stat' key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Stats:</h3>
        <ul>
          {pokemonDetails.stats && pokemonDetails.stats.map((stat, index) => (
            <li className='list-stat-name' key={index}>
              <div className='stat-name bold-stat'>{statIcons[stat.stat.name]}{stat.stat.name}:</div> {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Abilities:</h3>
        <ul>
          {pokemonDetails.abilities && pokemonDetails.abilities.map((ability, index) => (
            <li className='bold-stat' key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Height:</h3>
        <p className='bold-stat'>{pokemonDetails.height / 10} m</p>
      </div>
      <div>
        <h3>Weight:</h3>
        <p className='bold-stat'>{pokemonDetails.weight / 10} kg</p>
      </div>
      </div>
    </div>
 );
};

export default PokemonDetails;