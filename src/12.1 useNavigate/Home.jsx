import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

export const Home = () => {
    const [nombre,setNombre]= useState('');
    const Navigate = useNavigate();

    const handleInput = (e) =>{
        setNombre(e.target.value);
    }

    const handleSeleccionarProducto = () =>{
        Navigate(`/productos/${nombre}`);
    }

  return (
    <>
        <h1> Inicio</h1>

        <input 
            type= "text"
            placeholder="Escribe un producto"
            value= {nombre}
            onChange={handleInput}
        ></input>
        <button onClick={handleSeleccionarProducto}> Ver Detalle</button>
    </>
  )
}
