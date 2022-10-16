import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { buscarProdutosPorNome, ProdutosListados } from '../API/CadProduto.js';
import BoxProduto from './boxProduto.js';
import './cabecalho.scss';

export default function CabecalhoPrincipal(props){
    const [produtos, setProdutos] = useState([]);
   
    const [busca, setBusca] = useState('');


    async function buscarNomeClick() {
        const resp = await buscarProdutosPorNome(busca);
        console.log(resp)
        setProdutos([resp]);
     }




    return(
            <main>
                <header className="cab1">
               <Link to='/Menu'> <img className="logo1" alt="" src={props.logo}/></Link>    
                    <img  className='menuCab1' alt="" src={props.menu}/>

                    <div>
                    <input className='busca1' placeholder='encontre seu produto aqui' type='text' value={busca} onChange={e=> setBusca(e.target.value)} />
                    <button onClick={buscarNomeClick}>pesquisar</button>

                        


                    </div>
                    
                    <img className='icons1' src={props.fav}></img>
                    <Link to='/login/usuario'>        <img className='icons1' src={props.user}></img></Link>
                 <img className='icons1' src={props.sacola}></img>

                    
            </header>
                <hr className='linha1'></hr>

                


               <div>
                   {produtos.map(item =>
                        <BoxProduto
                        img=""
                        preco={item.preco}
                        nome={item.nome}
                        />
                    )}
               </div>

            </main>
               
        )
}