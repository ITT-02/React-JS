import { useState } from "react"

export const UseStateApp = ({Value }) => {
const [counter,setCounter] = useState(Value)

    const handleAdd2=()=>{
        console.log("Aumenta +1")
        //setCounter(counter +1)

        setCounter((c)=>{
            if(c<10){
                return c=c+1;
            }
            else{
                return c=c+10;
            }
        })

    }
  return (
    <> <div>Contador 2</div>
        
        <p>{counter}</p>
        <button onClick={ handleAdd2}> -1 </button>
        <button onClick={ handleAdd2}> Reset </button>
        <button onClick={ handleAdd2}> +1 </button>
    
    </>
   
  )
}

