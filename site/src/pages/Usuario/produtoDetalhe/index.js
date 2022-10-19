import './index.scss'

import Rodape from '../../../components/rodape.js';
import Tema from '../../../components/tema.js';
import CabecalhoPrincipal from '../../../components/cabecalhoPrinc.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarPorId } from '../../../API/Usuario';
import { API_URL } from '../../../API/config';

export default function Index(){
    const[produto, setProduto]= useState({cor:[], tamanho:[], imagens:[] , destaque:[], info:{} });
    const[imagemPrincipal, setImagemPrincipal] = useState(0);
    

    const { id } = useParams();

    
    async function carregarPagina(){
        const resposta= await buscarPorId(id);
        setProduto(resposta);
    }

    function ExibirImagemPrincipal(){
        if(produto.imagens.length > 0){
            return API_URL + '/' + produto.imagens[imagemPrincipal];
        }
        else{
            return '/produto-padrao.png';
        }
    }

    function exibirImagensProduto(imagem){
        return API_URL + '/' + imagem;

    }
    
    useEffect(() => {
        carregarPagina();
    }, [])


    return(
        <main>
            <CabecalhoPrincipal logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>
            <Tema cor='cor-pedido' nome={produto.info.NomeTema}></Tema>     

            <div className='detalhes'>
                <div>
                    {produto.imagens.map((item, pos) =>
                        <img src={exibirImagensProduto(item)} onClick={() => setImagemPrincipal(pos)}/>
                        )}
                </div>
                    <div><img src={ExibirImagemPrincipal()}/></div>
                    <div className='nome'> Nome  {produto.info.nome} </div>
                    <div className='categoria'> Categoria {produto.info.NomeCategoria} </div>
                    
                    <div className='preco-label'> PREÇO </div>
                    <div className='preco'> R$ {produto.info.preco} </div>


                    
                </div>
                <Rodape></Rodape>

        </main>

    )
}