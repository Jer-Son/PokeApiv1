import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoritePokemons = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad de la lista

  useEffect(() => {
    // Recuperar todos los Pokémon favoritos desde el backend
    axios.get('/pokemon/favorites')
      .then(response => {
        setFavoritePokemons(response.data);
      })
      .catch(error => {
        console.error('Hubo un error obteniendo los Pokémon favoritos:', error);
      });
  }, []); // Se ejecuta una vez cuando el componente se monta

  const toggleList = () => { 
    setIsOpen(!isOpen); // Cambia el estado de isOpen cada vez que se hace clic en el botón
  };

  return (
    <div>
      <button onClick={toggleList}>
        {isOpen ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
      </button>

      {isOpen && (
        <>
          <h2>Mis Pokémon Favoritos</h2>
          {favoritePokemons.length === 0 ? (
            <p>No tienes ningún Pokémon favorito aún.</p>
          ) : (
            <ul>
              {favoritePokemons.map(pokemon => (
                <li key={pokemon._id}>{pokemon.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default FavoritePokemons;
