import React, { useState } from 'react';
import axios from 'axios';

const AddFavorite = ({ pokemonName, userId }) => {
  const [message, setMessage] = useState('');
  const addFavorite = () => {
    axios.post('/pokemon/favorite', { name: pokemonName, userId }) // userId debería tener un valor
    .then(response => {
        setMessage(response.data.message);
    })
    .catch(error => {
        console.error(error);
        setMessage('Error añadiendo el Pokémon a favoritos.');
    });
};

  return (
    <div>
      <button onClick={addFavorite}>Añadir a Favoritos</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddFavorite;
