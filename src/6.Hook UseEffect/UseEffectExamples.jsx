import { useEffect, useState } from 'react';
import './styles.css';

export const UseEffectExamples = () => {
  // =========================================================
  // ESTADOS PRINCIPALES
  // =========================================================

  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {const savedTheme = localStorage.getItem('darkMode');  return savedTheme === 'true';});

  // =========================================================
  // EJEMPLO 1: useEffect con dependencia [counter]
  // =========================================================
  useEffect(() => {
    console.log('Ejemplo 1: el contador cambió a', counter);
  }, [counter]);

   // =========================================================
  // EJEMPLO 2: useEffect con arreglo vacío []
  // =========================================================
  useEffect(() => {
    console.log('EJEMPLO 2:Este mensaje aparece solo una vez al iniciar');
  }, []);

  // =========================================================
  // EJEMPLO 3: Guardar modo oscuro en localStorage
  // =========================================================
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);


  // =========================================================
  // FUNCIONES DEL CONTADOR
  // =========================================================

  const restar = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const sumar = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(10);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <div className="theme-toggle-container">
        <button onClick={toggleTheme}>
          {darkMode ? 'Cambiar a claro' : 'Cambiar a oscuro'}
        </button>
      </div>

      <div className="counter-card">
        <h1>Ejemplos de useEffect</h1>
        <p>{counter}</p>

        <p>
          Tema actual: <strong>{darkMode ? 'Oscuro' : 'Claro'}</strong>
        </p>

        <div className="button-container">
          <button onClick={restar}>-1</button>
          <button onClick={reset}>Reset</button>
          <button onClick={sumar}>+1</button>
        </div>
      </div>
    </div>
  );
};