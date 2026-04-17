import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from '../Inicio'
import { DashboardLayout } from '../DashboardLayout'
import { DashboardPrincipal } from '../DashboardPrincipal'
import { Configuracion } from '../Configuracion'
import { Usuarios } from '../Usuarios'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route  index element ={<DashboardPrincipal/>} />
          <Route path= "usuarios" element ={<Usuarios/>} />
          <Route path= "configuracion" element ={<Configuracion/>} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

