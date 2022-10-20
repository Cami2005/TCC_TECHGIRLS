import { useState } from 'react';
import Storage from 'local-storage';
import { API_URL } from '../../API/config';
import './carrinhoItem.scss'


export default function CarrinhoItem({item:{ produto:{info, tema, destaque}, qtd }, RemoverItem}){
    const[qtdProduto, setQtdProduto] = useState(qtd)

    function Remover(){
        RemoverItem(info.id);
    }
    
    function ExibirImagemPrincipal(){
        return API_URL + '/' + destaque.url;
    }

    function CalcularSubtotal(){
        const subtotal = qtdProduto * info.preco;
        return (subtotal);
    }
    
    function AlterarQtd(novaQtd){
        console.log(novaQtd);
        setQtdProduto(novaQtd);
        
        let carrinho= Storage('carrinho');
        let itemStorage= carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd
        Storage('carrinho', carrinho);
       }

    return(
        <div>
            <div className='produto-carrinho'>
                <div>
                    <img className='img-carrinho-prod' src={ExibirImagemPrincipal()}></img>
                </div>
                    <div className='infos-prod-carrinho'>
                        <div>
                            <p>{info.NomeTema}</p>
                        </div>

                        <div>
                            <p>{info.nome}</p>
                        </div>
                
                    </div>
                        <div>
                            <p>R${info.preco}</p>
                        </div>
                        
            </div>
                    <div>
                        <select onChange={e => AlterarQtd(e.target.value)} value={qtdProduto}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div>
                        <p>subtotal</p>
                        <p>R${CalcularSubtotal()}</p>
                    </div>
                    <div>
                        <button onClick={Remover}> excluir</button>
                    </div>


        </div>
    )
} 