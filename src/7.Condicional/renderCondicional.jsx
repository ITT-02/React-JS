
export const RenderCondicional = ({estado}) => {
  let mensaje;

  if(estado === 'pendiente'){
    mensaje = <p className="text-yellow">Pendiente de confirmación</p>
  } else if (estado === 'preparando'){
    mensaje = <p className="text-blue">En preparación</p>
  } else if (estado === 'enviado'){
    mensaje = <p className="text-green">Enviado</p>
  } else {
    mensaje = <p className="text-gray">El estado es desconocido</p>
  }

    return (
    <div className="orden-estado">
        {mensaje}
    </div>
  )
}


export const OperadorTernario = ({estaLogueado=false}) => {
      let mensaje = 'Juan Perez';
      return (
      <div className="top-right header">
          
          <h3>{estaLogueado ? `Bienvenido de nuevo - ${mensaje}`: 'Por favor, inicia sesion!!' }</h3> 
      </div>
    )
  }

export const OperatorsAndOr = ({mensajes,usuario}) => {
    
  return (
    <>
        {/* <div>{mensajes.length>0 && 
            <p>Tienes {mensajes.length} mensajes sin leer</p>}
        </div>
        <div>
            <p>
            {`${usuario.nombre || 'Usuario desconocido'}`}
            </p>
        </div> */}


       <div className="top-right content">
            {/* {mensajes.length>0 && 
            <>
                <p> 
                    <strong>
                    Tienes {mensajes.length} mensajes sin leer de " {`${usuario.nombre || 'Usuario desconocido'}`} "
                    </strong>    
                </p>
                    
                <ul>
                    {mensajes.map((mensaje, index) => (
                        <li key={index}>{mensaje}</li>
                    ))}
                </ul>
            </>
            } */}
          <details>
            
            <summary>
              <strong>Tienes {mensajes.length} mensajes sin leer de " {`${usuario.nombre || 'Usuario desconocido'}`} "</strong>
            </summary>

            <ul>
                    {mensajes.map((mensaje, index) => (
                        <li key={index}>{mensaje}</li>
                    ))}
            </ul>
          </details>
        </div>

    </>
  )
}


