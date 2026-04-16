import {StrictMode} from 'react'; // importar react
import {createRoot} from 'react-dom/client' //importacion del DOM React
import './styles.css'

import { CounterApp, EventoClick } from './EventoClick';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CounterApp></CounterApp>
  </StrictMode>
)