import { useEffect, useState } from 'react';
import { buscarProdutosPorNome, ProdutosListados } from '../API/CadProduto.js';
import './cabecalhoBanner.scss';

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

                <img className='banner' src={props.banner}></img>

                <div className='menuzinho'>
                    <p>Vestimenta</p>
                    <p>Acessório</p>
                    <p>Colecionável</p>
                    <p>Funko</p>
                    <p>Caneca</p>
                    <p>Pelúcia</p>
                    <p>Moda e Casa</p>
                </div>
                <hr className='linha-menuzinho'></hr>


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