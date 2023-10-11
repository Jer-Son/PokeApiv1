import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonItem from './PokemonItem';
import '../App.css';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => {
        const updatedPokemons = response.data.results.map((pokemon, index) => {
          return {
            ...pokemon,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          };
        });
        setPokemons(updatedPokemons);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon) => (
            <div key={pokemon.name}> {/* Asegúrate de que cada tarjeta esté contenida dentro de un div */}
                <PokemonItem 
                    name={pokemon.name} 
                    imageUrl={pokemon.image} 
                />
            </div>
        ))}
    </div> 
);

};

export default Pokemons;
