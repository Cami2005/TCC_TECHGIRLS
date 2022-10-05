import { useEffect, useState } from 'react';
import { buscarProdutosPorNome, ProdutosListados } from '../API/CadProduto.js';
import './cabecalhoTemas.scss';

export default function Cabecalho(props){

    const [produtos, setProdutos] = useState([]);
    const [busca, setBusca] = useState('');

    async function ListarProdutos(){
        const resposta= await ProdutosListados();
        setProdutos(resposta)
    }

    
        useEffect(() => {
            ListarProdutos();
        } , [])

    async function buscarNomeClick() {
        const resp = await buscarProdutosPorNome(busca);
        console.log(resp)
        setProdutos(resp);
     }

    return(
            <main>
            <header className="cab">
                <img className="logo" alt="" src={props.logo}/>
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

                <h2>{props.tema}</h2>
        <div>
                    {produtos.map(item =>
                    <div>
                        <p>{item.nome}</p>
                        <p>{item.preco}</p>
                    </div>
                        
                     )}
                </div>
            </main>
               
        )
}