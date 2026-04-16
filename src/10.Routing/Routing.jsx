import {Inicio} from './Inicio'
import {Productos} from './Productos'
import {Contacto} from './Contacto'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export const Routing = () => {
  return (

    <BrowserRouter>
        <nav>
            <Link to="/"> Inicio</Link>
            <br/>
            <Link to="/Productos"> Productos</Link>
            <br/>
            <Link to="/Contacto"> Contacto</Link>
        </nav>

        <Routes>
            <Route path="/" element= {<Inicio/>} />
            <Route path="/Productos" element= {<Productos/>} />
            <Route path="/Contacto" element= {<Contacto/>} />
        </Routes>
    
    </BrowserRouter>
  )
}
