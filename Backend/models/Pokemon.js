const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: String,
  userId: mongoose.Schema.Types.ObjectId, // para asociar el Pokémon con un usuario específico
  // puedes agregar más campos según sea necesario
});


const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;


