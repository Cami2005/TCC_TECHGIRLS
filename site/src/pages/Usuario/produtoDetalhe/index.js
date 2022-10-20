import './index.scss'

import Rodape from '../../../components/rodape.js';
import Tema from '../../../components/tema.js';
import CabecalhoPrincipal from '../../../components/cabecalhoPrinc.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarPorId } from '../../../API/Usuario';
import Storage from 'local-storage';
import { API_URL } from '../../../API/config';
import { toast } from 'react-toastify';

export default function Index(){
    const[produto, setProduto]= useState({cor:[], tamanho:[], imagens:[] , destaque:{}, info:{} });
    const[imagemPrincipal, setImagemPrincipal] = useState(0);
    

    const { id } = useParams();

    
    async function carregarPagina(){
        const resposta= await buscarPorId(id);
        console.log(resposta);
        setProduto(resposta);
        console.log(produto)
    }

    function ExibirImagemPrincipal(){
        if(produto.imagens.length > 0){
            return API_URL + '/' + produto.destaque.url[imagemPrincipal];
        }
        else{
            return '/produto-padrao.png';
        }
    }

    function exibirDestaque() {
        return API_URL + '/' + produto.destaque.url;
    }

    function exibirImagensProduto(imagem){
        return API_URL + '/' + imagem;

    }

    function adicionarAoCarrinho(){
        let carrinho = [];
        if(Storage('carrinho')){
            carrinho = Storage('carrinho');
        }
        if(!carrinho.find(item => item.id === id )){
            carrinho.push({
                id: id, 
                qtd: 1
            })
            Storage('carrinho', carrinho)
        }
        toast.dark('Produto adicionado ao carrinho')
    }
    
    useEffect(() => {
        carregarPagina();
    }, [])


    return(
        <main className="main">
            <CabecalhoPrincipal logo='../../../images/logoAdmin.png' menu='../../../images/menu.png'  fav='../../../images/favoritos.png' 
            user='../../../images/user.png' sacola='../../../images/sacola.png'/>
            <Tema cor='cor-pedido' nome={produto.info.NomeTema}></Tema>     

            <div className='detalhes'>
                
                <div>
                    <img className="img" src={exibirDestaque()}/>
                </div>
                <div>

                    {produto.imagens.map((item, pos) =>
                        <img className="img" src={exibirImagensProduto(item)} onClick={() => setImagemPrincipal(pos)}/>
                        )}
                </div>
                    <div className='nome'> Nome  {produto.info.nome} </div>
                    <div className='categoria'> Categoria {produto.info.NomeCategoria} </div>
                    
                    <div className='preco-label'> PREÇO </div>
                    <div className='preco'> R$ {produto.info.preco} </div>
                    <div className='descricao'> Descrição: {produto.info.descricao} </div>

                    <button onClick={adicionarAoCarrinho}> Adicionar ao carrinho </button> 
                    
                </div>
                <Rodape></Rodape>

        </main>

    )
}