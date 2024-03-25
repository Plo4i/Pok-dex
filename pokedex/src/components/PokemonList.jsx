import React, { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails } from "../services/pokemonService";

import '../style/PokemonListStyle.css'

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 10;

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getPokemonList(limit, currentPage * limit);
            const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                const details = await getPokemonDetails(pokemon.name);
                return { ...pokemon, imageUrl: details.sprites.front_default };
            }));
            setPokemonList(pokemonDetails);
        };

        fetchPokemon();
    }, [currentPage]);

    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const handlePreviousPage = () => setCurrentPage(currentPage - 1);

    return (
        <>
        <div className="pokemon-wrap">
            {pokemonList && pokemonList.map((pokemon, index) => (
                <div className="pokemon" key={pokemon.name}>
                    <a href={`pokemon/${pokemon.name}`}>
                        <div className="number">#{index + 1 + (currentPage * limit)}</div>
                        <div className="image-and-name">
                            <div>{pokemon.name}</div>
                            <img src={pokemon.imageUrl} alt={pokemon.name} />
                        </div>
                    </a>
                </div>
            ))}
        </div>
        <div className="switch-page-buttons">
            <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                Previous
            </button>
            <button onClick={handleNextPage}>
                Next
            </button>
        </div>
        </>
    );
};

export default PokemonList;