import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginAdmin from './pages/Administrador/LoginAdmin/index.js';
import PedidosRecentes from './pages/Administrador/PedidosRecentes/index.js';
import Menu from './pages/Administrador/Menu/index.js';
import Produtos from './pages/Administrador/Produtos';
import AddProduto from './pages/Administrador/AddProduto';
import CadastroUsuario from './pages/Usuario/cadastroUsuario/index.js'
import LoginUsuario from './pages/Usuario/loginUsuario/index.js'
import NossosProdutos from './pages/Usuario/nossosProdutos/index.js'
import DadosPessoais from './pages/Usuario/dadosPessoais/index.js'

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>}/>
                <Route path='/login/admin' element={<LoginAdmin />} />
                <Route path='/pedidosRecentes' element={<PedidosRecentes />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/addProduto' element={<AddProduto />} />
                <Route path='/addProduto/:id' element={<AddProduto />} />
                <Route path='/login/usuario' element={<LoginUsuario/>} />
                <Route path='/usuario/cadastro' element={<CadastroUsuario />} />
                <Route path='/usuario/produtos' element={<NossosProdutos/>} />
                <Route path='/dadosPessoais' element={<DadosPessoais/>} />
            </Routes>
        </BrowserRouter>
    )
}