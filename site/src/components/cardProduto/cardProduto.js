import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../API/config';
import './cardProduto.scss'

export default function CardProduto(props){
    const navigate = useNavigate();
    
    function exibir(imagem){
        if(!imagem){
            return '';
        }
        else{
            return `${API_URL}/${imagem}`;
        }
    }

    function formatarPreco(preco){
        return preco.replace('.', ',');
    }

    function abrirDetalhes(id){
        navigate('/produto/' + id + '/detalhe')
    }

    return(
        <div className="cardprd" onClick={() => abrirDetalhes(props.id)}>

            <button className='favoritar'> <img src="" alt="" /> </button> 
            <img src={exibir(props.imagem)} className="imagemcardzinho" alt=""/>
            <h6> {props.nome} </h6>
            <h6> {formatarPreco(props.preco)} </h6>
        
        </div>
    )
} 