import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buscarProdutosPorNome, ProdutosListados } from '../API/CadProduto.js';
import BoxProduto from './boxProduto.js';
import './cabecalhoPrinc.scss';

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
                <header className="cab">
                <Link to='/Menu'> <img className="logo1" alt="" src={props.logo}/></Link>    

                    <img  className='menuCab' alt="" src={props.menu}/>

                    <div>
                    <input className='busca' placeholder='encontre seu produto aqui' type='text' value={busca} onChange={e=> setBusca(e.target.value)} />
                    <button onClick={buscarNomeClick}>pesquisar</button>

                        


                    </div>
                    
                    <img className='icons' src={props.fav}></img>
                    <img className='icons' src={props.user}></img>
                    <img className='icons' src={props.sacola}></img>

                    
            </header>
                <hr className='linha'></hr>

                <img className='banner' src={props.banner}></img>

            <div className='links-menu'>
            <Link className='Link'>Vestimenta</Link>
            <Link className='Link' >Acessório</Link>
            <Link className='Link'>Colecionável</Link>
            <Link className='Link'>Funko</Link>
            <Link className='Link'>Caneca</Link>
            <Link className='Link'>Pelúcia</Link>
            <Link className='Link'>Moda Casa</Link>

            </div>
            <hr className='linha-menu'></hr>
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