import {StrictMode} from 'react'; // importar react
import {createRoot} from 'react-dom/client' //importacion del DOM React
import './styles.css'
import { CounterApp } from './CounterApp';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CounterApp Value={10}></CounterApp>
   
  </StrictMode>
)