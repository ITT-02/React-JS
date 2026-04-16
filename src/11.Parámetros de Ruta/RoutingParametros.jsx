import {BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
export const RoutingParametros = () => {

    const Home = () =>{
        return(
            <div>
                <h2> Lista de Productos</h2>
                <Link to="/productos/1"> Ver Producto 1</Link>
                <br/>
                 <Link to="/productos/2"> Ver Producto 2</Link>
                <br/>
            </div>

        )
    }

    const DetalleProducto = () => {
        const {id} = useParams();

        return (
        <h2> Detalle del producto con ID: {id}</h2>
        )
    }

  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home></Home>}></Route>
            <Route path="/productos/:id" element= {<DetalleProducto></DetalleProducto>}></Route>
        </Routes>
        </BrowserRouter>
  )
}
