/*************** IMPRESION DE VARIABLES *********** */
const newArreglo = [1,2,3,4,5,6,7,8,9];

const newObjeto = {
  nombre: 'Maria',
  apellidos: 'Salas Perez',
  ocupacion:'Front-End',
  edad: 25,
}

export const ImpresionvariablesApp = () => {
  return (
    <>
    <div>Impresion variables</div>
    <p>Impresion Arreglo : {newArreglo} </p>
    <p>Impresion del Objeto:{JSON.stringify(newObjeto)}</p>
    <p>Impresion Nombre :{newObjeto.nombre}</p>
    <p>Impresion Apellidos :{newObjeto.apellidos}</p>
    <p>Impresion Ocupacion :{newObjeto.ocupacion}</p>
    <p>Impresion Edad :{newObjeto.edad}</p>
    {/*************** IMPRESION DE FUNCION *********** */}
    <code>{JSON.stringify(getResult())}</code>

    </>
  )
}


export const getResult = () => {
  return (
   newObjeto
  )
}
