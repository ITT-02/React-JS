import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { OperadorTernario, OperatorsAndOr, RenderCondicional } from '../../../CursoReact/myApp/src/renderCondicional'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RenderCondicional estado='pendiente' />
    <RenderCondicional estado='preparando' />
    <RenderCondicional estado='enviado' />
    <RenderCondicional estado='desconocido' /> */}

    <OperadorTernario estaLogueado={true} ></OperadorTernario>
    {/* <OperadorTernario estaLogueado={false} ></OperadorTernario> */}

    <OperatorsAndOr mensajes={['Hola como estas', 'contesta...','Adios!!!']} usuario={{nombre:""}}/>
  </StrictMode>,
)
