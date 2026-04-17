
import {NavLink, Outlet } from 'react-router-dom'
import './DashboardLayout.css'

export const DashboardLayout = () => {
  return (
     <>
        <h1>Panel de Control</h1>

        <nav>
            <ul>
                <li> <NavLink 
                        to= "/dashboard"
                        end
                        className={( {isActive}) => ( isActive ? 'activo':'')}
                        > Inicio de Dashboard </NavLink> </li>
                <li> <NavLink 
                        to= "/dashboard/usuarios"
                        className={( {isActive}) => ( isActive ? 'activo':'')}
                        > Lista de Usuarios </NavLink> </li>
                <li> <NavLink 
                        to= "/dashboard/configuracion"
                        className={( {isActive}) => ( isActive ? 'activo':'')}
                        > Configuracion </NavLink> </li>
            </ul>
        </nav>

        <hr/>

        <Outlet />
     </>

    
  )
}
