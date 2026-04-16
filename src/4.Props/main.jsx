import {StrictMode} from 'react'; // importar react
import {createRoot} from 'react-dom/client' //importacion del DOM React
import './styles.css'
import { PropsAPP } from './Props';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <PropsAPP  nombre="Maria" apellido = "Salas" edad={25}></PropsAPP>
  </StrictMode>
)