import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // Esta pieza de estado determina si el modo oscuro está activado o no.
  const [darkMode, setDarkMode] = useState(false);

  // Esta función se ejecuta cada vez que se hace clic en el botón.
  // Cambia el estado de darkMode a su valor opuesto (true a false, o false a true).
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  // Este efecto se ejecuta cada vez que el estado darkMode cambia.
  useEffect(() => {
    // Si darkMode es true, añade la clase 'dark' al elemento root del DOM (esto activa el modo oscuro en Tailwind CSS).
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Esto renderiza un botón que, cuando se hace clic, ejecuta la función handleToggle.
  return (
    <button
      className="p-2 bg-gray-800 text-white rounded"
      onClick={handleToggle}
    >
      Dark Mode
    </button>
  );
};

export default DarkModeToggle;
