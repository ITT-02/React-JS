import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './style.css'

import {Form} from './Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form></Form>
   
  </StrictMode>,
)
