const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon');

router.post('/favorite', (req, res) => {
  const { name } = req.body;

  // Crear un nuevo documento de Pokémon con los datos recibidos en la solicitud
  const pokemon = new Pokemon({ name });

  // Guardar el documento en la base de datos MongoDB
  pokemon.save()
    .then(() => {
      res.json({ message: 'Pokémon añadido a favoritos.' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error al guardar el Pokémon.' });
    });
});

router.get('/favorites', (req, res) => {
  // Recuperar todos los Pokémon favoritos de la base de datos
  console.log('Fetching favorite Pokemons...');
  Pokemon.find({})
    .then(pokemons => {
      console.log('Pokemons found:', pokemons);
      res.json(pokemons);
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).json({ error: 'Error al recuperar los Pokémon favoritos.' });
    });
});


module.exports = router;

