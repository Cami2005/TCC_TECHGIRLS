import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginAdmin from './pages/Administrador/LoginAdmin/index.js';
import PedidosRecentes from './pages/Administrador/PedidosRecentes/index.js';
import Menu from './pages/Usuario/LandingPage/index.js';
import Produtos from './pages/Administrador/Produtos';
import AddProduto from './pages/Administrador/AddProduto';
import CadastroUsuario from './pages/Usuario/cadastroUsuario/index.js'
import LoginUsuario from './pages/Usuario/loginUsuario/index.js'
import DadosPessoais from './pages/Usuario/dadosPessoais/index.js'
import AlterarProduto from './pages/Administrador/AlterarProduto'
import Naruto from './pages/Usuario/nossosProdutos/Naruto/index.js'
import StrangerThings from './pages/Usuario/nossosProdutos/StrangerThings/index.js'
import Marvel from './pages/Usuario/nossosProdutos/Marvel/index.js'
import HarryPotter from './pages/Usuario/nossosProdutos/HarryPotter/index.js'
import Queen from './pages/Usuario/nossosProdutos/Queen/index.js'
import BTS from './pages/Usuario/nossosProdutos/BTS/index.js'
import RickMorty from './pages/Usuario/nossosProdutos/RickMorty/index.js'
import DragonBall from './pages/Usuario/nossosProdutos/DragonBall/index.js'
import DC from './pages/Usuario/nossosProdutos/DC/index.js'
import Favoritos from './pages/Usuario/Favoritos/index.js'





export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>}/>
                <Route path='/login/admin' element={<LoginAdmin />} />
                <Route path='/pedidosRecentes' element={<PedidosRecentes />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/admin/produto' element={<AddProduto />} />
                <Route path='/login/usuario' element={<LoginUsuario/>} />
                <Route path='/usuario/cadastro' element={<CadastroUsuario />} />
                <Route path='/dadosPessoais' element={<DadosPessoais/>} />
                <Route path='/admin/produto/:id' element={<AlterarProduto/>}/>
                <Route path='/naruto' element={<Naruto/>} />
                <Route path='/marvel' element={<Marvel/>} />
                <Route path='/harryPotter' element={<HarryPotter/>} />
                <Route path='/queen' element={<Queen/>} />
                <Route path='/bts' element={<BTS/>} />
                <Route path='/rickMorty' element={<RickMorty/>} />
                <Route path='/dragonBall' element={<DragonBall/>} />
                <Route path='/dc' element={<DC/>} />
                <Route path='/StrangerThings' element={<StrangerThings/>} />
                <Route path='/favoritos' element={<Favoritos/>} />
                
            </Routes>
        </BrowserRouter>
    )
}