import { useState } from "react";

export const Form = () => {

const [formData,setformData] = useState(
    {
    nombre:'',
    email:'',
    mensaje:'',
    }
);

const changeInput = (e) =>{

    const{name,value} = e.target;
    setformData(prev => ({...prev,
       [name]:value 
    }))
}

const handleSubmit = (e) =>{
    e.preventDefault();  // Evitar la recarga
    console.log(formData)
    // Logica
}

  return (
    <div className="container-form">
        <div className="centered-div">
        <form onSubmit = {handleSubmit}>
            <h3> Formulario de contacto - Controlado</h3>

            <div className='input-line'>
                <label> 
                    Nombre:
                    <input 
                        id="nombre"
                        name="nombre"
                        type="text"
                        onChange={changeInput}
                        value ={formData.nombre}
                    />   
                </label>
            </div>

            <div className='input-line'>
                <label> 
                    Email:
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        onChange={changeInput}
                        value ={formData.email}
                    />   
                </label>
            </div>

            <div className='input-line'>
                <label> 
                    Mensaje:
                    <textarea 
                        id="mensaje"
                        name="mensaje"
                        type="text"
                        onChange={changeInput}
                        value ={formData.mensaje}
                    />   
                </label>
            </div>
            
            <div className='button'>
            <button type="submit"> Enviar</button>
            </div>
        </form>
        </div>
    </div>
  )
}
