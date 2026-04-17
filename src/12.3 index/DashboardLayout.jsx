
import {Link, Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
     <>
        <h1>Panel de Control</h1>

        <nav>
            <ul>
                <li> <Link to= "/dashboard"> Inicio de Dashboard </Link> </li>
                <li> <Link to= "/dashboard/usuarios"> Lista de Usuarios </Link> </li>
                <li> <Link to= "/dashboard/configuracion"> Configuracion </Link> </li>
            </ul>
        </nav>

        <hr/>

        <Outlet />
     </>

    
  )
}
