import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginAdmin from './pages/LoginAdmin/index.js';
import PedidosRecentes from './pages/PedidosRecentes/index.js';
import Menu from './pages/Menu/index.js';
import Produtos from './pages/Produtos/index.js';
import AddProduto from './pages/AddProduto/index.js';


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>}/>
                <Route path='/loginAdmin' element={<LoginAdmin />} />
                <Route path='/pedidosRecentes' element={<PedidosRecentes />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/addProduto' element={<AddProduto />} />

            </Routes>
        </BrowserRouter>
    )
}