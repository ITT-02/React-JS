import {StrictMode} from 'react'; // importar react
import {createRoot} from 'react-dom/client' //importacion del DOM React

import {HolaMundo} from './HolaMundo';
import { FirstApp } from './FirstApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HolaMundo></HolaMundo>
      <FirstApp></FirstApp>
  </StrictMode>
)