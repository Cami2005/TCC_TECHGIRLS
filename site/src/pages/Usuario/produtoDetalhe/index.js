import './index.scss'

import Rodape from '../../../components/rodape.js';
import Tema from '../../../components/tema.js';
import CabecalhoPrincipal from '../../../components/cabecalhoPrinc.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarPorId } from '../../../API/Usuario';

export default function Index(){
    const[produto, setProdutos]= useState({cor:[], tamanho:[], imagem:[] , destaque:[], info:{} });
    

    const { id } = useParams();

    
    async function carregarPagina(){
        const resposta= await buscarPorId(id);
        console.log(resposta);
    }
    
    useEffect(() => {
        carregarPagina();
    }, [])


    return(
        <main>
            <CabecalhoPrincipal logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>
            <Tema cor='cor-pedido' nome=''></Tema>     
                <Rodape></Rodape>

        </main>

    )
}