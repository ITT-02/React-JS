import {Link} from 'react-router-dom'
export const Inicio = () => {
  return (
    <>
        <div>Inicio</div>
        <p> Esta es una pagina pública</p>

        <nav>
            <ul>
                <li> <Link to="/"> Ir a Inicio </Link></li>
                <li> <Link to="/protegida"> Ir a Pagina protegida </Link></li>
                <li> <Link to="/login"> Ir a Login </Link></li>

            </ul>

        </nav>
    </>
  )
}
