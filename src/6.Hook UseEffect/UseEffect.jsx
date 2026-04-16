import { useEffect, useState } from 'react';

export const CounterEffectApp = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${counter}`;
  });

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};
