import {StrictMode} from 'react'; // importar react
import {createRoot} from 'react-dom/client' //importacion del DOM React
import { ImpresionvariablesApp } from './ImpresionVariables';
import './styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ImpresionvariablesApp></ImpresionvariablesApp>
  </StrictMode>
)