
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './Home'
import {ProductoDetalle} from './ProductoDetalle'
export const App = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/productos/:nombre"   element = {<ProductoDetalle/>}/>
            </Routes>
        </BrowserRouter>
  )
}
