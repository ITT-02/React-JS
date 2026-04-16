import { useState } from 'react';


export const CounterApp = ({Value}) => {
  // =========================================================
  // ESTADO
  // =========================================================
  const [counter, setCounter] = useState(Value);

  // =========================================================
  // FUNCIONES
  // =========================================================  
  const restar = () => {
    //setCounter(counter - 1);
    counter > 0 && setCounter(counter - 1);
  };

  const sumar = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(Value);
  };

  return (
    <>
    <div className="app">
      <div className="counter-card">
        <h1>CONTADOR</h1>
        <p>{counter}</p>

        <div className="button-container">
          <button onClick={restar}>-1</button>
          <button onClick={reset}>Reset</button>
          <button onClick={sumar}>+1</button>
        </div>
      </div>
    </div>
  </>
  );
};