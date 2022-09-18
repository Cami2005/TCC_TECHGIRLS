import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginAdmin from './pages/LoginAdmin/index.js';
import PedidosRecentes from './pages/PedidosRecentes/index.js';
import Menu from './pages/Menu/index.js';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/loginAdmin' element={<LoginAdmin />} />
                <Route path='/pedidosRecentes' element={<PedidosRecentes />} />
            </Routes>
        </BrowserRouter>
    )
}