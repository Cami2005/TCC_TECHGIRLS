import { useState } from 'react';
import { buscarProdutosPorNome } from '../API/CadProduto.js';
import './cabecalho.scss';

export default function Cabecalho(props){

    const [produtos, setProdutos] = useState([]);
    const [busca, setBusca] = useState('');

    async function buscarNomeClick() {
        const resp = await buscarProdutosPorNome(busca);
        console.log(resp)
        setProdutos(resp);
     }

    return(
            <header className="cab">
                <img className="logo" alt="" src={props.logo}/>
                <img  className='menuCab' alt="" src={props.menu}/>
                <div>
                <input className='busca' placeholder='encontre seu produto aqui' type='text' value={busca} onChange={e=> setBusca(e.target.value)} />
                <button onClick={buscarNomeClick}>pesquisar</button>

                </div>
                <img className='icons' alt="" src={props.fav}></img>
                <img className='icons' alt="" src={props.user}></img>
                <img className='icons' alt="" src={props.sacola}></img>
            </header>
        )
}