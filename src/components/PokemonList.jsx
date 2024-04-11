import React, { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails } from "../services/pokemonService";

import '../style/PokemonListStyle.css'
import NavBar from "./NavBar";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 10;

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getPokemonList(limit, currentPage * limit);
            const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                const details = await getPokemonDetails(pokemon.name);
                const primaryType = details.types[0].type.name;
                const typeClass = `pokemon-${primaryType.toLowerCase()}`; // Converting the type of pokemon to a class so it can be styled easily
                return { ...pokemon, imageUrl: details.sprites.front_default, typeClass };
            }));
            setPokemonList(pokemonDetails);
        };

        fetchPokemon();
    }, [currentPage]);

    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const handlePreviousPage = () => setCurrentPage(currentPage - 1);

    return (
        <>
        <NavBar />

        {/* Display cards */}
        <div className="pokemon-wrap">
            {pokemonList && pokemonList.map((pokemon, index) => (
                <div className={`pokemon ${pokemon.typeClass}`} key={pokemon.name}>
                    <a href={`/Pokedexpokemon/${pokemon.name}`}>
                        <div className="number">#{index + 1 + (currentPage * limit)}</div>
                        <div className="image-and-name">
                            <div className="pokemon-name">{pokemon.name}</div>
                            <img className="pokemon-image" src={pokemon.imageUrl} alt={pokemon.name} />
                        </div>
                    </a>
                </div>
            ))}
        </div>
        {/* Display Buttons */}
        <div className="switch-page-buttons">
            <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                &lt; Previous
            </button>
            <button onClick={handleNextPage}>
                Next &gt;
            </button>
        </div>
        </>
    );
};

export default PokemonList;