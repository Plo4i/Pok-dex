import React, {useState, useEffect} from "react";
import { getPokemonList } from "../services/pokemonService";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 10;


    useEffect(() => {
        const fetchPokemon = async() => {
            const data = await getPokemonList(limit, currentPage * limit);
            console.log(data);
            setPokemonList(data.results)
        };

        fetchPokemon();
    }, [currentPage]);

    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const handlePreviousPage = () => setCurrentPage(currentPage - 1);

    return (
        <div>
            {pokemonList && pokemonList.map((pokemon) => (
                <a href={`pokemon/${pokemon.name}`}><div className="pokemon" key={pokemon.name}>{pokemon.name}</div></a>
            ))}
            <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                Previous
            </button>
            <button onClick={handleNextPage}>
                Next
            </button>
        </div>
    )
}

export default PokemonList;