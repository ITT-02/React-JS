import {StrictMode} from 'react'; // importar react
import {createRoot} from 'react-dom/client' //importacion del DOM React
import './styles.css'
import { CounterEffectApp } from './UseEffect';




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CounterEffectApp></CounterEffectApp>
  </StrictMode>
)