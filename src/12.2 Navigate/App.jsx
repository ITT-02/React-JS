
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {Inicio} from './Inicio'
import {PaginaProtegida} from './PaginaProtegida'
import {Login} from './Login'

export const App = () => {
    const usuarioAutenticado = false;

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Inicio/>}/>

                <Route  
                    path="/protegida"
                    element ={ 
                        usuarioAutenticado ? <PaginaProtegida/> : <Navigate to ="/login"/>
                    }/> 

                <Route path="/login" element = {<Login/>}/>
            </Routes>
        </BrowserRouter>
  )
}
