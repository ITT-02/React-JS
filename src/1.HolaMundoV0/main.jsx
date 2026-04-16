import React from 'react'; // importar react
import ReactDOM from 'react-dom/client' //importacion del DOM React

function HolaMundo(){
  return <h1>Hola Mundo</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HolaMundo></HolaMundo>
  </React.StrictMode>
)