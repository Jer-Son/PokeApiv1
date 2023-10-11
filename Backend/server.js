const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

// Aquí agregas el middleware body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb+srv://jersonhenao30:password@cluster0.myvhdh7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
.connect(url, connectionParams)
.then(() => {
  console.log('conectado');
})
.catch(err => {
  console.log(`Error conectando a la BBDD. ${err}`);
});

// Usar las rutas de Pokémon
app.use('/pokemon', pokemonRoutes);

app.listen(5000, () => {
  console.log("server corriendo en puerto 5000")
});










