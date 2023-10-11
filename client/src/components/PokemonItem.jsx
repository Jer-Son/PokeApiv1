import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddFavorite from './AddFavorite';
import '../App.css';


const PokemonItem = ({ name, imageUrl }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPokemonData();  // Llama a la función cuando el componente se monta
  }, [name]);  // Dependencia: se ejecutará de nuevo si `name` cambia

  return (
    <li className="card">
      <div className="card-front">
        <img src={imageUrl} alt={name} className="w-48 h-48 mx-auto mb-4 rounded-full cursor-pointer" />
        {/* Asegurando que el color del texto cambia en modo oscuro */}
        <div className="text-center text-black dark:text-white">
          {name}
        </div>
      </div>
      <div className="card-back bg-white dark:bg-gray-800  dark:text-white">
        <div>
          {pokemonData ? (
            <>
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
              <AddFavorite pokemonName={name} />
              
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        
      </div>
    </li>
  );



};

export default PokemonItem;
