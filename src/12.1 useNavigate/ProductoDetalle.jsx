import {useParams} from 'react-router-dom'
export const ProductoDetalle = () => {
    const {nombre} = useParams();

  return (
    <>
        <h1> Detalle del producto</h1>

        <p> Producto :  {nombre}</p>
    </>
    
  )
}
