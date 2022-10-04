import './index.scss'

import Cabecalho from "../../../components/cabecalho.js";
import { useEffect, useState } from 'react';
import { ProdutosListados } from '../../../API/CadProduto';

export default function Index(){
    const[produto, setProduto] = useState([]);


    async function ListarProdutos(){
        const resposta= await ProdutosListados();
        setProduto(resposta)
    }

    
        useEffect(() => {
            ListarProdutos();
        } , [])
    
    return(
        <main>
            <Cabecalho logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' user='../../../images/user.png' sacola='../../../images/sacola.png'/>
        
            <div>
                    {produto.map(item =>
                    <div>
                        <p>{item.nome}</p>
                        
                    </div>
                        
                     )}
                </div>
        
        </main>
    )
}