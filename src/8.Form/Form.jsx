import { useState } from "react";

export const Form = () => {

const [nombre,setNombre] = useState('');

const changeInput = (e) =>{
   // console.log(e);
    //setNombre(e.target.value)
    if(e.target.value== 'maria'){
        setNombre('');
    }
    else {
        setNombre(e.target.value)
    }
}

const handleSubmit = (e) =>{
    e.preventDefault();  // Evitar la recarga
    alert(`El nombre es : ${nombre} `);
    // Logica
}

  return (
    <div>

        <form onSubmit = {handleSubmit}>
            <h3> Formulario de contacto - Controlado</h3>
            <label> Nombre:
                <input 
                    type="text"
                    onChange={changeInput}
                    value ={nombre}
                />   
            </label>
             <p> Hola {nombre}</p>
             <button type="submit"> Enviar</button>

        </form>



    </div>
  )
}
