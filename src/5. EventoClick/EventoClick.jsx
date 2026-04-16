
export const EventoClicApp = ({value=0}) => {
    function handleAdd(event){
        console.log(event)
        console.log("Aumentando +1")
    }
    /***Funcion con parametros*** */
    function handleAdd2(event,newValue){
        console.log(event)
        console.log(newValue)
    }

  return (
    <>
        <div>CounterApp</div>
        <p>{value}</p>
        
        {/* Muestra inicial de como funciona el Mouse Event */}
        <button onClick={
            function(){
                console.log("Aumentando +1")
            }
        }>+1</button>
        {/* Agregamos la muestra del event porque pertenece a un MouseEvent */}
        <button onClick={
            function(event){
                console.log(event)
            }
        }>+1</button>

        {/* Separando la funcion  y convirtiendo a funcion flecha*/}
        <button onClick={
           (event)=> handleAdd(event)
        }>+1</button>

        {/* En caso se tenga el argumento que lo unico que hace es pasar a la funcion - handleAdd, se puede obviar su declaración*/}
        <button onClick={handleAdd}>+1</button>

        {/* En caso se tenga que enviar algun valor adicional fuera del evento clic, sí tendría volver a declarar*/}
         <button onClick={
           (event)=> handleAdd2(event,'Agregando +1')
        }>+1</button>

    </>
  )
}

/****** EJEMPLO DE COMO NO SE ENVIA EL VALOR AL PADRE Y SE TIENE PROBLEMAS ***/

export const CounterApp = ({value}) => {

    const handleAdd3=()=> {
        console.log("Aumentando valor a +1")
        value = value + 1;
        console.log(value)
    }

  return (
    <>
        <div>Contador</div>
        <p>{value}</p>
        <button onClick={handleAdd3}> +1 </button>
    </>

  )
}




