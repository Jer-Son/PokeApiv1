import React from 'react';
import Pokemon from '../components/Pokemons'
import Navbar from '../components/Navbar';
import SearchPokemon from '../components/SearchPokemon';
import '../App.css';
const MyComponent = () => (
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
    />

    <link
      href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css"
      rel="stylesheet"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");\n\n      html {\n        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n      }\n    '
      }}
    />
    <div className="h-full">
      {/*Nav*/}
      <Navbar />

      {/*Main*/}
      <div className="container pt-8 md:pt-16 mx-auto flex flex-col items-center">
        {/* Formulario */}
        <div className="w-full max-w-2xl p-4">
          <SearchPokemon />
        </div>

        {/* Contenedor de Pokémon */}
        <div className="container">
          <p className="text-blue-400 font-bold pb-4 text-center">
            Pokemons
          </p>
          <div>
            <Pokemon />
          </div>
        </div>

      </div>

      {/*Footer*/}
      <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a className="text-gray-500 no-underline hover:no-underline" href="#">
          © App 2023
        </a>
        - Template by
        <a
          className="text-gray-500 no-underline hover:no-underline"
          href="https://www.tailwindtoolbox.com"
        >
          TailwindToolbox.com
        </a>
      </div>
    </div>

  </>
);

export default MyComponent;


