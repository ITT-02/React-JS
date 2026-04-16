import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './style.css'

import {Routing} from './Routing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing></Routing>
   
  </StrictMode>,
)
