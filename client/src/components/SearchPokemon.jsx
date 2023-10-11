import React, { useState } from 'react';
import axios from 'axios';
import PokemonItem from './PokemonItem';

const SearchPokemon = () => {
    const [search, setSearch] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    const handleSearch = async () => {
        if (search.trim() === "") {  // Verifica si el campo de búsqueda está vacío
            alert("Por favor, ingresa un nombre de Pokémon.");  // Muestra una alerta o maneja este caso como prefieras
            return;
        }

        console.log('Buscando Pokémon...');
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
            console.log('Pokémon encontrado:', response.data);
            setPokemonData(response.data);
        } catch (error) {
            console.error("No se encontró el Pokémon", error);
            alert("Pokémon no encontrado. Por favor, intenta con un nombre diferente.");  // Puedes personalizar este mensaje de error
        }
    };


    return (
        <div>
            <div className="w-full flex justify-center items-center overflow-y-hidden mb-8">
                <form
                    className="bg-gray-900 opacity-75 shadow-lg rounded-lg px-8 pt-6 pb-8 flex items-center"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="mr-4 flex-1">
                        <label
                            className="block text-blue-300 font-bold mb-2"
                            htmlFor="pokemonName"
                        >
                            Buscar por nombre
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            id="pokemonName"
                            type="text"
                            placeholder="bulbasaur"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            type="button"
                            onClick={handleSearch}
                        >
                            BUSCAR
                        </button>
                    </div>

                </form>
            </div>
            {pokemonData && (
                <PokemonItem
                    name={pokemonData.name}
                    imageUrl={pokemonData.sprites.front_default}
                // y cualquier otro prop que necesites pasar
                />
            )}
        </div>
    );


};

export default SearchPokemon;
